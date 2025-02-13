import { FC } from "react"
import styled from "styled-components"
import { colors } from "../../style/variables"

interface UpDownVoteButtonProps {
    typeOfVote: 'up' | 'down'
}

const Style = styled.div`
    display:flex;
    background:${colors.color1};
    padding:.5rem;
    border-radius:3rem;
    box-shadow:0 0 .5rem ${colors.color4};
`

const UpDownVoteButton: FC<UpDownVoteButtonProps> = ({ typeOfVote }) => {

    // if up, arrow up, if down arrow down, else, no arrow, just a horizontal line
    const svgArrowDirection = typeOfVote ? typeOfVote === 'up' ? 'M8 1L8 15M8 1L15 7M8 1L1 7' : 'M8 15L8 1M8 15L1 9M8 15L15 9' : 'M1 8L15 8M1 1M1 15'

    return (
        <Style>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={svgArrowDirection} stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Style>
    )
}

export default UpDownVoteButton