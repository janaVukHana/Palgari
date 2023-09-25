import styled from 'styled-components'
import { useEffect, useState } from 'react'

import Flex from './StyledComponents/Flex'
import H2 from './StyledComponents/H2'
import Paragraph from './StyledComponents/Paragraph'

interface ListItemProps {
    $bgColor: string
}

interface ImgProps {
    $animate?: boolean
}

const FlexItem = styled.div`
    flex: 1;
    align-self: start;
`

const Img = styled.img<ImgProps>`
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    animation: ${(props) => props.$animate ? 'scaleAnimation .5s forwards' : 'none'};
    transition: opacity .5s linear;

    @keyframes scaleAnimation {
        0% {
          transform: scale(1); /* Initial scale */
          opacity: 1;
        }
        50% {
          transform: scale(0); /* Scale down */
          opacity: 0;
        }
        100% {
          transform: scale(1); /* Scale back up */
          opacity: 1
        }
      }
`

const List = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 10px;
`

const ListItem = styled.li<ListItemProps>`
    padding: 0.5rem;
    background-color: ${props => props.$bgColor};
    width: 10px;
    height: 10px;
    cursor: pointer;
`



const LazyDrop = () => {
    const [selectedImg, setSelectedImg] = useState('./images/lazyDropImg/black.png')
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimate(false)
        }, 500)
    }, [animate])

    const  handleClick = (newImg: string) => {
        setTimeout(() => {
            setSelectedImg(newImg)  
        }, 250)
        setAnimate(true)
    }

    return (
        <Flex $gap $justify='start' >
            <FlexItem>
                <H2 $color="#fff">LazyDrop</H2>
                <Paragraph $color="#ccc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt adipisci assumenda sint numquam debitis 
                    odit unde placeat, incidunt odio animi sapiente asperiores alias dicta molestiae iusto eveniet 
                    consectetur exercitationem quibusdam eius minus, consequuntur qui illo rem. Delectus harum tempora 
                </Paragraph>
            </FlexItem>
            <FlexItem>
                <div style={{backgroundColor: '#fff', marginBottom: '0.5rem'}}>
                    <Img src={selectedImg} alt="lazy drop" $animate={animate} />
                </div>
                <List>
                    <ListItem $bgColor="black" onClick={() => handleClick('./images/lazyDropImg/black.png')}></ListItem>
                    <ListItem $bgColor="blue" onClick={() => handleClick('./images/lazyDropImg/blue.png')}></ListItem>
                    <ListItem $bgColor="yellow" onClick={() => handleClick('./images/lazyDropImg/yellow.png')}></ListItem>
                </List>
            </FlexItem>
        </Flex>
    )
}

export default LazyDrop;

// import React, { useState } from 'react';


// const LazyDrop = () => {
//     const [selectedImg, setSelectedImg] = useState("./images/lazyDropImg/01.png");

//     const handleClick = (newImg) => {
//         setSelectedImg(newImg);
//     }

//     return (
//        
//                 <Img src={selectedImg} alt="lazy drop" />
//                 <List>
//                     <ListItem $bgColor="red" onClick={() => handleClick("./images/lazyDropImg/01.png")}></ListItem>
//                     <ListItem $bgColor="blue" onClick={() => handleClick("./images/lazyDropImg/02.png")}></ListItem>
//                     <ListItem $bgColor="green" onClick={() => handleClick("./images/lazyDropImg/03.png")}></ListItem>
//                 </List>
