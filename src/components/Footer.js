import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  align-items: center;
  justify-content: center;
  /* flex-direction: row; */
`;

const Footer = () => {
  return <StyledFooter>푸터</StyledFooter>;
};

export default Footer;
