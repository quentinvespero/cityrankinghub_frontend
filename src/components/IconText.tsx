import { FC } from "react"

export interface IconTextProps {
    text?: string
    imageName?: string
    className?:string
    description?:string
    style?:React.CSSProperties
    iconSize?:string
}

////////////////////////////////////////////
// Guide Props
////////////////////////////////////////////
// imageName : give full name of file. Exemple : image1.png
// text : 
// description : if given, will show up a span element containing the description text
// className : can give the name of the component in which it is, so it will be named as such "iconText-componentName"
// iconSize : width of the image

const IconText:FC<IconTextProps> = ({imageName, text, description, className, style, iconSize }) => {

    // path of the assets
    const assetPath = './assets/'

    // just to simplify the code, checking whether or not the description is given
    const descriptionText = description ? description : text

    // determining which path to give to the assets depending on whether it is an icon (svg) or image (other formats)
    const pathToApply = () => {
        let path = assetPath

        if (imageName) {
            if (imageName.includes('svg')) path += 'icons/'
            else path += 'imgs/'
        }

        return path
    }

    const styleToApply = {
        parent:{
            display:'flex'
        },
        image:{
            width: iconSize ? iconSize : '1rem',
            height: iconSize ? iconSize : '1rem'
        },
        text:{
            
        }
    }
    
    // console.log('-------textIcon',imageName,text, descriptionText)
    
    return (
        <div className={`iconText ${className}`} style={{...style,...styleToApply}} >
            {imageName && <img style={styleToApply.image} src={`${pathToApply()}${imageName}`} alt={descriptionText}/>}
            {text && <p>{text}</p>}
            {description && <span>{description}</span>}
        </div>
    )
}

export default IconText