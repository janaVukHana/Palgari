import styled from 'styled-components'

interface ParagraphProps {
    $color?: any
}

const Paragraph = styled.p<ParagraphProps>`
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${props => props.$color ? props.$color : '#242424'};
    line-height: 2rem;

    @media(max-width: 768px) {
        font-size: 1.125rem;
        margin-bottom: 0.9rem;
    }

    @media(max-width: 600px) {
        font-size: 1rem;
        margin-bottom: 0.75rem;
    }
`

export default Paragraph;