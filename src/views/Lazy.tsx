import {useState, useEffect} from 'react'

import styled from 'styled-components'
import Section from '../components/StyledComponents/Section'
import Container from '../components/StyledComponents/Container'
import Flex from '../components/StyledComponents/Flex'
import H1 from '../components/StyledComponents/H1'
import Paragraph from '../components/StyledComponents/Paragraph'
import Img from '../components/StyledComponents/Img'

import {Link} from 'react-scroll'
import ScrollToTopButton from '../components/ScrollToTopButton'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import LazyDrop from '../components/LazyDrop'

const FlexItem = styled.div`
    width:calc(25% + 20px); /* Set the width to 25% of the container */
    padding-bottom: 25%; /* Set the aspect ratio (1:1 for square) */
    position: relative; /* Create a relative position context for the image */
    border: 10px solid #242424;
    border-radius: 50%; /* Apply border radius */
    overflow: hidden; /* Clip the image to the border radius */
    margin: 10px; /* Add some space around each item */
    transition: 0.3s linear;
    
    &:hover ${Img} {
        transform: scale(1.05); /* Increase the size by 5% */
        cursor: pointer;
    }

    @media(max-width: 768px) {
        width: calc(50% + 20px);
        padding-bottom: 50%;
    }

    @media(max-width: 768px) {
        width: calc(70% + 20px);
        padding-bottom: 70%;
    }
`

const H3 = styled.h3`
    position: absolute;
    top: 50px;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);
    color: var(--blue);
`
 
const Lazy = () => {
    // Fixing on page load animation
    const [shouldAnimatePreScroll, setShouldAnimatePreScroll] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldAnimatePreScroll(true);
        }, 1);

        return () => clearTimeout(timer);
    }, []);
    return (
        <> 
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} animatePreScroll={shouldAnimatePreScroll}>
            <Section $mt  $height="100vh">

                <Container>
                    <H1 $color="#fff">Bean Bag</H1>

                    <Paragraph $color="#fff">
                        Introducing our latest innovation in comfort and style the all-new bean bag with a cutting-edge design and 
                        top-quality craftsmanship. We've redefined relaxation with this contemporary addition to your living 
                        space.
                    </Paragraph>
                </Container>
                <Container>
                    <h2 style={{color: '#fff'}}>Explore Our Models</h2>
                    <Flex $height="auto" $justify="space-around" $gap>
                        <FlexItem>
                            <H3>Lazy Drop</H3>
                            <Link to="lazy-drop" smooth="true" duration={500}>
                                <Img src="./images/palgari/lazy_1.jpg" alt="lazy drop" />
                            </Link>
                        </FlexItem>
                        <FlexItem>
                            <H3>Lazy Block</H3>
                            <Link to="lazy-block" smooth="true" duration={500}>
                                <Img src="./images/palgari/lazy_2.jpg" alt="lazy drop" />
                            </Link>
                        </FlexItem>

                        <FlexItem>
                            <H3>Lazy Cloud</H3>
                            <Link to="lazy-cloud" smooth="true" duration={500}>
                                <Img src="./images/palgari/lazy_3.jpg" alt="lazy drop" />
                            </Link>
                        </FlexItem>
                    </Flex>
                </Container>
            </Section>
            </AnimationOnScroll>

            <Section id="lazy-drop" style={{backgroundColor: '#242424'}} $height="100vh" $padding="6rem 0 3rem">
                <Container>
                    <LazyDrop />
                </Container>
            </Section>

            <Section id="lazy-block" $height="100vh" $padding="6rem 0 3rem">
                <Container>
                    <h2 style={{color: '#fff'}}>Lazy Block</h2>
                </Container>
            </Section>

            <Section id="lazy-cloud" $height="100vh" $padding="6rem 0 3rem">
                <Container>
                    <h2 style={{color: '#fff'}}>Lazy Cloud</h2>
                </Container>
            </Section>

            {/* Scroll to top */}
            <ScrollToTopButton />
        </>
    )
}

export default Lazy;