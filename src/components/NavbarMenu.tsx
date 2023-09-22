import styled from 'styled-components'
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import SocialIcons from './SocialIcons';

const List = styled.ul`
    display: flex;
    list-style-type: none;
    transition: 0.3s linear;

    @media (max-width: 768px) {
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 69px;
        z-index: 999;
        width: 50%;
        height: calc(100vh - 69px);
        background-color: rgba(255,255,255,0.9);
        border-right: 3px solid #fff;
      }
`
const ListItem = styled.li`
    @media (max-width: 768px) {
        margin: 2rem;
    }
`

const StyledNavLink = styled(NavLink)`
    padding: 0.5rem 1rem;
    margin-left: 3px;
    text-decoration: none;
    color: var(--blue);
    font-weight: 700;

    &:hover, &.active {
        border-bottom: 3px solid var(--blue);
    }
`

const NavbarMenu = () => {
    const {showMenu, setShowMenu} = useStateContext()

    useEffect(() => {
        if(window.innerWidth < 768) {
          if(showMenu) {
            document.body.style.overflow = 'hidden'
          }
          else {
            document.body.style.overflow = 'visible'
          }
        }
        
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768) {
                setShowMenu(true)
            } else {
              setShowMenu(false)
            }
        })
      }, [showMenu])


    const handleClick = () => {
        if(window.innerWidth <= 768) {
          setShowMenu(false)
        }
      }

    return (
        <>
                <SocialIcons />
                <List style={!showMenu ? {left: '-100%'}: {left: '0%'}}>
                    {/* <ListItem><StyledNavLink to="/" onClick={handleClick} className={({isActive}) => isActive ? 'active':''}>Početna</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/artikli" onClick={handleClick} className={({isActive}) => isActive ? 'active':''}>Artikli</StyledNavLink></ListItem>
                    <ListItem><StyledNavLink to="/onama" onClick={handleClick} className={({isActive}) => isActive ? 'active':''}>O&nbsp;Nama</StyledNavLink></ListItem> */}
                    <ListItem><StyledNavLink to="/kontakt" onClick={handleClick} className={({isActive}) => isActive ? 'active':''}>Contact</StyledNavLink></ListItem>
                </List>
        </>
    )
}

export default NavbarMenu;