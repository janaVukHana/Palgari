// Styles
import styled from 'styled-components'
import Header from '../components/StyledComponents/Header'
import Flex from '../components/StyledComponents/Flex'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

interface FlexItemProps {
    $img: string
}

const FlexItem = styled.div<FlexItemProps>`
    flex: 1;
    height: 100vh;
    width: 100%;
    transition: 0.5s linear;
    position: relative;
    background-image: url('./images/palgari/${props => props.$img}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    border: 5px solid #fff;
    border-top-width: 0;
    border-bottom-width: 0;

    &:hover {
        background-color: #fff;
        flex: 5;

        & > p.top {
            top: 100px;
            color: #fff;

            @media(max-width: 600px) {
                top: 30px;
            }
        }

        & > p.bottom {
            bottom: 100px;
            color: #fff;

            @media(max-width: 600px) {
                bottom: 30px;
            }
        }

        & h2 {
            font-size: 4rem;
            color: #fff;

            @media(max-width: 600px) {
                font-size: 2.8rem;
            }
        }

    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1); /* Adjust the opacity as needed */
        z-index: 1; /* Ensure the overlay is on top of the background image */
    }

    &:hover::before {
        background-color: rgba(0, 0 , 0, 0.5); /* New background color on hover */
    }

    &:hover a {
        transform: scale(1) translateX(-50%);
    }

    @media(max-width: 768px) {
        border-top-width: 5px;
        border-bottom-width: 5px;
        border-right-width: 0;
        border-left-width: 0;
    }
`

const H2 = styled.h2`
    color: var(--blue);
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: 0.3s linear;
    z-index: 2;
`

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background-color: transparent;
    color: #fff;
    border: 2px solid var(--red);
    position: absolute;
    top: 60%;
    left: 50%;
    transform: scale(0) translate(-50%, -50%);
    z-index: 3;
    transition: 0.3s linear;

    &:hover {
        background-color: var(--red);
    }
`

const ParagraphTop = styled.p`
    color: var(--blue);
    font-size: 2rem;
    position: absolute;
    left: 50%;
    top: -200px;
    transform: translateX(-50%);
    transition: 1s linear;
    z-index: 2;
`

const ParagraphBottom = styled.p`
    color: var(--blue);
    font-size: 2rem;
    position: absolute;
    left: 50%;
    bottom: -200px;
    transform: translateX(-50%);
    transition: 1s linear;
    z-index: 2;
`

const Home = () => {
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);
    return (
        <Header>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>

            <Flex $height="100vh">
                <FlexItem $img="lazy_1.jpg">
                    <H2>Bean Bag</H2>
                    <ParagraphTop className="top">Cozy</ParagraphTop>
                    <ParagraphBottom className="bottom">Lounge</ParagraphBottom>
                    <StyledLink to="/lazy">Discover</StyledLink>
                </FlexItem>

                <FlexItem $img="luster_1.jpg">
                    <H2>Chandeliers</H2>
                    <ParagraphTop className="top">Elegant</ParagraphTop>
                    <ParagraphBottom className="bottom">Illumination</ParagraphBottom>
                    <StyledLink to="/chandeliers">Explore</StyledLink>
                </FlexItem>

                <FlexItem $img="luster_3.webp">
                    <H2>Furniture</H2>
                    <ParagraphTop className="top">Functional</ParagraphTop>
                    <ParagraphBottom className="bottom">Design</ParagraphBottom>
                    <StyledLink to="/furniture">Design</StyledLink>
                </FlexItem>
            </Flex>

            </AnimationOnScroll>
        </Header>
    )
}

export default Home;