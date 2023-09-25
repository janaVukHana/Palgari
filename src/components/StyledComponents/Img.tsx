import styled from 'styled-components'

const Img = styled.img`
    position: absolute; /* Position the image absolutely within the item */
    width: 100%;
    max-width: 100%; /* Take up 100% of the item's width */
    height: 100%; /* Take up 100% of the item's height */
    object-fit: cover; /* Maintain aspect ratio while covering the area */
    transition: 0.3s linear;
`

export default Img;