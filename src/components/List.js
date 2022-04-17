import { useRef } from "react";

const List = ({ onRemove, list }) => {
  const contentInput = useRef();
  const handlequitEdit = () => {};

  return (
    <section className="List">
      <h1>목록</h1>
      <h2>할일이 {list.length}개 있어요!!</h2>
      <div>
        {list.map((item) => (
          <div className="List_data" key={item.id}>
            <div>{item.content}</div>
            <div>{new Date(item.created_date).toLocaleString()}</div>
            <button>수정</button>
            <button
              onClick={() => {
                onRemove(item.id);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

List.defaultProps = {
  list: [],
};

export default List;
