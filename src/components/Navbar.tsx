import styled from 'styled-components'
import Logo from './Logo'
import NavbarMenu from './NavbarMenu'
import Hamburger from './Hamburger'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'

interface NavigationProps {
    $isHomePage: boolean | null
}

const Navigation = styled.nav<NavigationProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    // HEIGHT is 0 on home page, and auto on all others
    height: ${props => props.$isHomePage ? '0' : 'auto'};
    overflow: ${props => props.$isHomePage ? 'hidden' : 'visible'};
    box-shadow: 5px 5px 10px #242424;
`

const Container = styled.div`
    width: 80%;
    max-width: 992px;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navbar = () => {

    const {isHomePageActive, setIsHomePageActive} = useStateContext()
    
    const location = useLocation()

    useEffect(() => {
        location.pathname === '/' ? setIsHomePageActive(true) : setIsHomePageActive(false)
    }, [location, isHomePageActive])

    return (
        <Navigation $isHomePage={isHomePageActive}>
            <Container>
                <Logo />
                <NavbarMenu />
                <Hamburger />
            </Container>
        </Navigation>
    )
}

export default Navbar;