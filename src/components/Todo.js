import { useRef, useState } from "react";
import styled from "styled-components";

const StyledTodo = styled.section`
  margin: 10px;
  h1 {
    font-size: 2em;
  }
`;

const Todo = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentInput = useRef();

  const handleSubmit = () => {
    if (!content.length) {
      contentInput.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <StyledTodo>
      <h1>오늘은 뭘 할까?</h1>
      <div>
        <input
          ref={contentInput}
          name="content"
          value={content}
          onKeyDown={(e) =>
            e.isComposing || e.key === "Enter" ? handleSubmit() : null
          }
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>하자!</button>
      </div>
    </StyledTodo>
  );
};

export default Todo;
