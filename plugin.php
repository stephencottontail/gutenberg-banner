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
    wp_register_script( 'banner-script', plugins_url( 'dist/blocks.js', __FILE__ ), array( 'wp-blocks', 'wp-components', 'wp-element', 'wp-editor', 'wp-compose' ) );
    /**
     * Despite what some sources may say, it's no longer necessary to have
     * any dependencies for the block style, and from my testing, it may
     * actually prevent the block style from loading properly.
     */
    wp_register_style( 'banner-block-style', plugins_url( 'dist/block.css', __FILE__ ) );
    wp_register_style( 'banner-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), array( 'wp-edit-blocks' ) );
} );