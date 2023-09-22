import styled from 'styled-components'

import SocialIcons from './SocialIcons'
// import FooterLinks from './FooterLinks'
import Logo from './Logo'

// Only for SEO
const FooterDiv = styled.footer`
    // padding: 3rem 0 0;
    background-color: var(--blue);
    color: #fff;
    // border-top: 5px solid var(--light-blue);
    height: 0;
    overflow: hidden;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    &:last-child {
        border-bottom: none; /* Override border-bottom for the last Container */
    }
`

const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
`

const FlexStart = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    border-bottom: 1px solid #fff;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    gap: 5rem;

    @media(max-width: 600px) {
        flex-direction: column;
        gap: 2rem;
    }
`

const Paragraph = styled.p`
    color: #fff;
    font-size: 0.8rem;
`

const Footer = () => {
    return (
        <FooterDiv>
            <Container>
                <FlexBetween>
                    <Logo />
                    <SocialIcons />
                </FlexBetween>
                <FlexStart>
                   {/* <FooterLinks /> */}
                </FlexStart>
            </Container>
            <Container>
                <FlexBetween>
                    <Paragraph>
                        &copy; FeroDm 2023, Sva prava sadržana
                    </Paragraph>
                    <Paragraph>
                        Web Design by <a href="https://ilijaradovanovic.com" target="_blank" style={{color: 'inherit'}}>Ilija Radovanovic</a>
                    </Paragraph>
                </FlexBetween>
            </Container>
        </FooterDiv>
    )
}

export default Footer;