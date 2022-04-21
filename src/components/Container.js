import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import SlidePicture from "./SlidePicture";

const StyledContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid rgb(85, 78, 78);

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: row;
  flex: 1;
  a {
    display: block;
    margin: 25px;
  }
`;

const Container = () => {
  return (
    <StyledContainer>
      <Header />
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/slidepicture" element={<SlidePicture />}></Route>
      </Routes>
    </StyledContainer>
  );
};

export default Container;
