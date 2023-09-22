import styled from 'styled-components'

const Btn = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      // background-color: #0056b3;
    }
  }
`

const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Btn onClick={scrollToTop}>
      Scroll to Top
    </Btn>
  );
};

export default ScrollToTopButton;
