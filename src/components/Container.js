import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgb(85, 78, 78);

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: row;
  flex: 1;
`;

const Container = () => {
  return (
    <StyledContainer>
      <Header />
      <Main />
    </StyledContainer>
  );
};

export default Container;
