import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import Flex from './StyledComponents/Flex'
import H2 from './StyledComponents/H2'
import Paragraph from './StyledComponents/Paragraph'

interface ListItemProps {
    $bgColor: string
}

interface FlexItemProps {
    $flex?: string
}

const FlexItem = styled.div<FlexItemProps>`
    flex: ${props => props.$flex ? props.$flex : '1'};
    align-self: start;
`

const Img = styled.img`
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
`

const List = styled.ul`
    display: flex;
    list-style-type: none;
    gap: 10px;
`

const ListItem = styled.li<ListItemProps>`
    background-color: ${props => props.$bgColor};
    width: 40px;
    height: 40px;
    border: 3px solid #242424;
    border-radius: 50%;
    cursor: pointer;
    transition: transform .3s;

    &:hover {
        transform: scale(1.2);
    }
`

const LazyBlock = () => {
    const [selectedImg, setSelectedImg] = useState('./images/lazyBlockImg/black.png')

    const  handleClick = (newImg: string) => {
        setSelectedImg(newImg)  
    }

    useEffect(() => {
        // Preload images
        const imagesToPreload = [
            './images/lazyBlockImg/black.png',
            './images/lazyBlockImg/blue.png',
            './images/lazyBlockImg/yellow.png',
            './images/lazyBlockImg/purple.png',
        ];

        imagesToPreload.forEach((img) => {
            new Image().src = img;
        });
    }, []);

    return (
        
        <Flex $gap $justify='start'>
            <FlexItem>
                <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1.5} animateOnce={false} animatePreScroll={false}>
                    <H2 $color="var(--dark)" $fontSize='4rem'>Lazy Block</H2>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInLeft" duration={2} animateOnce={false} animatePreScroll={false}>

                <Paragraph $color="var(--dark-secondary)">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt adipisci assumenda sint numquam debitis 
                    odit unde placeat, incidunt odio animi sapiente asperiores alias dicta molestiae iusto eveniet 
                    consectetur exercitationem quibusdam eius minus, consequuntur qui illo rem. Delectus harum tempora 
                </Paragraph>
                </AnimationOnScroll>
            </FlexItem>
            <FlexItem $flex="2">
                <AnimationOnScroll animateIn="animate__fadeInRight" duration={2} animateOnce={false} animatePreScroll={false}>

                <div style={{marginBottom: '0.5rem'}}>
                    <Img src={selectedImg} alt="lazy drop" />
                </div>

                <List>
                    <ListItem $bgColor="black" onClick={() => handleClick('./images/lazyDropImg/black.png')}></ListItem>
                    <ListItem $bgColor="blue" onClick={() => handleClick('./images/lazyDropImg/blue.png')}></ListItem>
                    <ListItem $bgColor="yellow" onClick={() => handleClick('./images/lazyDropImg/yellow.png')}></ListItem>
                    <ListItem $bgColor="purple" onClick={() => handleClick('./images/lazyDropImg/purple.png')}></ListItem>
                </List>
                </AnimationOnScroll>
            </FlexItem>
        </Flex>
    )
}

export default LazyBlock;