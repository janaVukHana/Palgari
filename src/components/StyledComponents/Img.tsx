import styled from 'styled-components'
interface ImgProps {
    $circle?: boolean
}

const Img = styled.img<ImgProps>`
    position: absolute; /* Position the image absolutely within the item */
    width: 100%;
    max-width: 100%; /* Take up 100% of the item's width */
    height: 100%; /* Take up 100% of the item's height */
    object-fit: cover; /* Maintain aspect ratio while covering the area */
    transition: 0.3s linear;
    ${props => props.$circle && 'border-radius: 50%'}
`

export default Img;