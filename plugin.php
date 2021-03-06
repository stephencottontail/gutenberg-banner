<?php
/**
 * Plugin Name: Gutenberg Banner
 * Description: Banner block inspired by a similar module I created in Beaver Builder
 * Author: Stephen Dickinson <stephencottontail@me.com>
 * Author URI: https://stephencottontail.com
 * Version: 1.0.0
 * License: GPL-2.0
 */

add_action( 'init', function() {
    wp_register_script( 'banner-script', plugins_url( 'dist/blocks.js', __FILE__ ), array( 'wp-api-fetch', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-element', 'wp-editor', 'wp-html-entities', 'wp-keycodes', 'wp-url' ) );
    /**
     * Despite what some sources may say, it's no longer necessary to have
     * any dependencies for the block style, and from my testing, it may
     * actually prevent the block style from loading properly.
     */
    wp_register_style( 'banner-block-style', plugins_url( 'dist/block.css', __FILE__ ) );
    wp_register_style( 'banner-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), array( 'wp-edit-blocks' ) );
    
    register_block_type( 'limeguten/banner', array(
        'editor_script' => 'banner-script',
        'editor_style'  => 'banner-editor-style',
        'style'   => 'banner-block-style'
    ) );
} );

/**
 * Create new category for LimeCuda blocks
 *
 * It is possible to use an SVG icon, but it's recommended to use the
 * SVG React element like you would do for a block. See the link for
 * more information.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge( $categories, array( array(
        'slug'  => 'limecuda',
        'title' => 'LimeCuda Blocks',
    ) ) );
}, 10, 2 );
