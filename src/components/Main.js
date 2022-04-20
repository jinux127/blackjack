import List from "./List";
import Todo from "./Todo";
import styled from "styled-components";

const StyledMain = styled.section`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  align-items: center;
  justify-content: center;
  flex: 9;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <StyledMain>
      <Todo />
      <List />
    </StyledMain>
  );
};

export default Main;
