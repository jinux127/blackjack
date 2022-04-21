import styledComponents from "styled-components";

const StyledMain = styledComponents.section`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  align-items: center;
  justify-content: center;
  flex: 9;
  display: flex;
  flex-direction: column;
`;

const SlidePicture = () => {
  return <StyledMain></StyledMain>;
};

export default SlidePicture;
