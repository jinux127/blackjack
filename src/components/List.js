import { useRef } from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const StyledList = styled.section`
  margin: 10px;
  text-align: center;
  width: 80%;
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1em;
  }
`;
const List = ({ onRemove, onEdit, list }) => {
  const contentInput = useRef();

  return (
    <StyledList>
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
    </StyledList>
  );
};

List.defaultProps = {
  list: [],
};

export default List;
