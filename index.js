import './src/scss/block.scss'
import './src/scss/editor.scss'
import { registerBlockType } from '@wordpress/blocks'
import { SVG, Path } from '@wordpress/components'
import URLInputButton from './src/vendor/url-input/button'

registerBlockType( 'limeguten/banner', {
    title: 'Banner',
    icon: <SVG viewBox="0 0 32 32" version="1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1"><Path d="M5 13h22v7H5zM1 14h4v7H1l2-3-2-4M31 21h-4v-7h4l-2 4 2 3" /></SVG>,
    category: 'limecuda',
    attributes: {
        url: {
            type: 'string',
        },
        text: {
            type: 'string'
        }
    },
    edit( { className, attributes, setAttributes } ) {
        const { url, text } = attributes

        return (
            <div className={ className }>
                <URLInputButton
                url={ url }
                onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
                />
            </div>
        )
    },
    save( { className } ) {
        return <div className={ className }>Hello Frontend!</div>
    }
} )
