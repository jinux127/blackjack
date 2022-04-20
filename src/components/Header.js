import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return <StyledHeader>헤더</StyledHeader>;
};

export default Header;
