import { registerBlockType } from '@wordpress/blocks'
import { createElement as el } from '@wordpress/element'

registerBlockType( 'limeguten/banner', {
    title: 'Banner',
    icon: el( 'svg', { viewBox: "0 0 32 32", version: "1", fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "1" }, el( 'path', { d: "M5 13h22v7H5zM1 14h4v7H1l2-3-2-4M31 21h-4v-7h4l-2 4 2 3" }, null ) ),
    category: 'limecuda',
    edit() {
        return el( 'p', {}, 'Hello Editor!' );
    },
    
    save() {
        return el( 'p', {}, 'Hello Front End!' );
    }
} )
