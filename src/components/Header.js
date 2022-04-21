import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>헤더</h1>
      <ul>
        <Link to="/">메인</Link>
        <Link to="/slidepicture">슬라이드</Link>
      </ul>
    </StyledHeader>
  );
};

export default Header;
