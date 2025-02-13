import styled from "styled-components"
import UpDownVoteButton from "./UpDownVoteButton"
import UpDownVoteCounter from "./UpDownVoteCounter"
import { colors } from "../../style/variables"

const Style = styled.div`
    display:flex;
    background:${colors.color4};
    border-radius:3rem;
    padding:.3rem;
    align-items:center;
    column-gap:.4rem;
    box-shadow:0 0 .5rem ${colors.color4};
`

const UpDownVote = () => {
    return (
        <Style>
            <UpDownVoteButton typeOfVote="up"/>
            <UpDownVoteCounter/>
            <UpDownVoteButton typeOfVote="down"/>
        </Style>
    )
}

export default UpDownVote