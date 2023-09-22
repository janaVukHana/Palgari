import styled from 'styled-components'

interface H1Props {
    $center?: boolean
    $color: string
}

const H1 = styled.h1<H1Props>`
    color: ${props => props.$color};
    font-size: 2.5rem;
    text-align: ${props => props.$center ? 'center':''};
    margin-bottom: 0.9rem;

    @media(max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 0.8rem;
    }

    @media(max-width: 600px) {
        font-size: 1.5rem;
        margin-bottom: 0.7rem;
    }
`

export default H1;