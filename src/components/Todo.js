import { useRef, useState } from "react";

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
    <section className="Todo">
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
    </section>
  );
};

export default Todo;
