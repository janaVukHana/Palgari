import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    max-width: 992px;
    margin: 0 auto;

    @media(max-width: 600px) {
        width: 90%;
    }
`

export default Container;