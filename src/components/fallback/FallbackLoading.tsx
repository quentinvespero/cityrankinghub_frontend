import { colors } from "../../style/variables"
import IconText from "../IconText"

const FallbackLoading = () => {

    const style = {
        container: {
            background:colors.color3_dark,
            display:'flex',
            alignSelf:'center',
            padding:'.5rem 2rem',
            borderRadius:'.5rem',
            margin:'2rem 0rem',
            transition:'.15s'
        }
    }

    return (
        <div className="fallbackLoading fallbackComponent" style={style.container}>
            <IconText imageName="" text="loading..." />
        </div>
    )
}

export default FallbackLoading