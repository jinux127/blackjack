import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "../atoms/Slide";

const StyledMain = styled.section`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  align-items: center;
  justify-content: center;
  flex: 9;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;
const JSON = [
  { url: "assets/images/picture01.jpg" },
  { url: "assets/images/picture02.jpg" },
  { url: "assets/images/picture03.jpg" },
];
const TOTAL_PAGE = JSON.length;

const SlidePicture = () => {
  const [page, setPage] = useState(0);
  const slideRef = useRef(null);

  const prevSlideBtn = () => {
    page === 0 ? setPage(TOTAL_PAGE - 1) : setPage(page - 1);
  };

  const nextSlideBtn = () => {
    page >= JSON.length - 1 ? setPage(0) : setPage(page + 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${page}00%)`;
  }, [page]);

  return (
    <StyledMain>
      {page}
      <SliderContainer ref={slideRef}>
        {JSON.map((item, i) => (
          <Slide key={i} src={item}></Slide>
        ))}
      </SliderContainer>
      <button onClick={prevSlideBtn}>prev</button>
      <button onClick={nextSlideBtn}>next</button>
    </StyledMain>
  );
};

export default SlidePicture;
