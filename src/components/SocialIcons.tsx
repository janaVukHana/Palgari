import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    @media(max-width: 600px) {
        gap: 0.5rem;
    }
`

const Link = styled.a`
    color: inherit;
    text-decoration: none;
    transition: 0.3s linear;

    &:hover {
        transform: scale(1.5);
    }
`

const SocialIcons = () => {
    return (    
        <Flex>
            Follow Us
            <Link href="/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="lg" /> 
            </Link>
            <Link href="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
        </Flex>
    )
}

export default SocialIcons;