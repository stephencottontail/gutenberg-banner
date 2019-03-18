import './src/scss/block.scss'
import './src/scss/editor.scss'
import { registerBlockType } from '@wordpress/blocks'
import { PlainText } from '@wordpress/editor'
import { SVG, Path, TextControl, TextareaControl } from '@wordpress/components'
import { withState } from '@wordpress/compose'
import URLInputButton from './src/vendor/url-input/button'

const BannerTitle = withState( {
    title: '',
} )( ( { title, setState } ) => ( 
    <TextControl
    label="Banner Title"
    value={ title }
    onChange={ ( title ) => setState( { title } ) }
    />
) )
const BannerContent = withState( {
    content: '',
} )( ( { content, setState } ) => ( 
    <TextareaControl
    label="Banner Content"
    value={ content }
    onChange={ ( content ) => setState( { content } ) }
    />
) )

registerBlockType( 'limeguten/banner', {
    title: 'Banner',
    icon: <SVG viewBox="0 0 32 32" version="1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1"><Path d="M5 13h22v7H5zM1 14h4v7H1l2-3-2-4M31 21h-4v-7h4l-2 4 2 3" /></SVG>,
    category: 'limecuda',
    attributes: {
        title: {
            type: 'string',
            default: ''
        },
        content: {
            type: 'string',
            default: ''
        },
        url: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    },
    edit( { className, attributes, setAttributes } ) {
        const { title, content, url, text } = attributes
        const changeUrl = ( url, post ) => setAttributes( { url, text: ( post && post.title ) || text } )
        
        return (
            <div className={ className }>
                <BannerTitle />
                <BannerContent />
                <div className={ 'banner-cta' }>
                    <label>{ 'Banner CTA' }</label>
                    <PlainText
                    value={ text }
                    onChange={ ( text ) => setAttributes( text ) }
                    placeholder={ 'Click here...' }
                    />
                    <URLInputButton
                    url={ url }
                    onChange={ changeUrl }
                    />
                </div>
            </div>
        )
    },
    save( { className } ) {
        return <div className={ className }>Hello Frontend!</div>
    }
} )
