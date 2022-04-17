import { useRef } from "react";
import ListItem from "./ListItem";

const List = ({ onRemove, onEdit, list }) => {
  const contentInput = useRef();

  return (
    <section className="List">
      <h1>목록</h1>
      <h2>할일이 {list.length}개 있어요!!</h2>
      <div>
        {list.map((item) => (
          <ListItem
            onRemove={onRemove}
            onEdit={onEdit}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

List.defaultProps = {
  list: [],
};

export default List;
