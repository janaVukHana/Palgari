import styled from 'styled-components';

interface H2Props {
    $color?: boolean
}

const H2 = styled.h2<H2Props>`
    font-size: 2rem;
    margin-bottom: 0.75rem;
    color: ${props => props.$color && '#242424'};

    @media(max-width: 768px) {
        font-size: 1.625rem;
        margin-bottom: 0.7rem;
    }

    @media(max-width: 600px) {
        font-size: 1.25rem;
        margin-bottom: 0.65rem;
    }
`

export default H2;
