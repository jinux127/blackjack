import styled from "styled-components";

const IMG = styled.div`
  width: 100%;
  height: 100%;
`;

const Slide = ({ img }) => {
  return <IMG src={img}></IMG>;
};

export default Slide;
