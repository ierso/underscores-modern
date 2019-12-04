<?php

function switch_to_relative_url($html, $id, $caption, $title, $align, $url, $size, $alt) {
	list( $img_src, $width, $height ) = image_downsize($id, $size);
	$hwstring = image_hwstring($width, $height);
  $image_url = wp_get_attachment_image_src( $id, $size );
  $relative_url = wp_make_link_relative($image_url[0]);   

	$out = '<div class="flex flex-wrap mb-8">';
	$out .= '<img src="'. $relative_url .'" alt="'.$alt.'" class="w-full" />';
	if($caption){
		$out .= '<span class="ml-auto mt-2 mr-4">'. $caption . '</span>';
	}
	$out .= '</div>';
  return $out; 
}