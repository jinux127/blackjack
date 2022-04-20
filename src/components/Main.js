import { useRef, useState } from "react";
import List from "./List";
import Todo from "./Todo";
import styled from "styled-components";

const StyledMain = styled.section`
  padding: 10px;
  margin: 5px;
  border: 1px solid rgb(85, 78, 78);
  align-items: center;
  justify-content: center;
  flex: 9;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (content) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      content,
      created_date,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newContentList = data.filter((item) => item.id !== targetId);
    setData(newContentList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((item) =>
        item.id === targetId ? { ...item, content: newContent } : item
      )
    );
  };

  return (
    <StyledMain>
      <Todo onCreate={onCreate} />
      <List onRemove={onRemove} onEdit={onEdit} list={data} />
    </StyledMain>
  );
};

export default Main;
