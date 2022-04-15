import { useState } from "react";

const Todo = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    onCreate(content);
    setContent("");
  };
  return (
    <section className="Todo">
      <h1>오늘은 뭘 할까?</h1>
      <div>
        <input
          name="content"
          value={content}
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
