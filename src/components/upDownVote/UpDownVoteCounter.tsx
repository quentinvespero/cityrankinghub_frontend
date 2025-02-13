import styled from "styled-components"
import { colors } from "../../style/variables"

const Style = styled.div`
    display:flex;
    background:${colors.color1};
    padding:.2rem .5rem;
    border-radius:.3rem;
    color:${colors.color2};
    font-size:.85rem;
`

const UpDownVoteCounter = () => {
    return (
        <Style>
            <p>10</p>
        </Style>
    )
}

export default UpDownVoteCounter