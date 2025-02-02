import { colors } from "../../style/variables"

const FallbackError = () => {

    const style = {
        container: {
            background:'darkred',
            display:'flex',
            alignSelf:'center',
            padding:'.5rem 2rem',
            borderRadius:'.5rem',
            margin:'2rem',
            transition:'.15s',
            placeSelf:'center',
            color:`${colors.color2}`,
            border: `dashed .15rem ${colors.color2}`,
            justifyContent:'center'
        },
        paragraph:{
        }
    }

    return (
        <div className="fallbackError fallbackComponent" style={style.container}>
            <p style={style.paragraph}>An error occured...</p>
        </div>
    )
}

export default FallbackError