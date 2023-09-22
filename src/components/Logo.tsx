import styled from 'styled-components'
import { useStateContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';

const Img = styled.img`
    height: 50px;

    @media(max-width: 600px) {
        height: 25px;
    }
`

const StyledNavLink = styled(NavLink)`
    color: var(--blue);
    text-decoration: none;
    transition: 0.2s linear all;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    &:hover {
        transform: scale(1.05);
    }
`

const LogoText = styled.div`
    font-size: 20px;
    letter-spacing: 10px;
    font-family: "Lora";
    font-weight: 700;

    @media(max-width: 600px) {
        font-size: 12px;
        letter-spaceing: 5px;
        width: 0;
        height: 0;
        overflow: hidden;
    }
`

const Span = styled.span`
    font-size: 16px;
    text-transform: uppercase;

    @media(max-width: 600px) {
        font-size: 8px;
    }
`

const Logo = () => {
    const {setShowMenu} = useStateContext()

    const handleClick = () => {
        if(window.innerWidth < 768) setShowMenu(false)
    }

    return (
        <StyledNavLink to="/" onClick={handleClick}>
            <Img src="images/palgari/logo.jpg" alt="logo" />
            <LogoText>
                Palgari
                {/* <br /><Span>Gvožđara</Span> */}
            </LogoText>
            {/* <WhatshotIcon fontSize="large" /> */}
        </StyledNavLink>
    )
}

export default Logo;