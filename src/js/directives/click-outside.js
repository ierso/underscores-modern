const clickOutside = {
  bind: function(el, binding, vnode) {
    const handler = event => {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', handler);
    document.body.$destroy = () =>
      document.body.removeEventListener('click', handler);
  },
  unbind: function(el) {
    document.body.$destroy();
  },
};

export default clickOutside;
