import ListItem from "./ListItem";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import DataState from "../state/DataState";

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
const List = () => {
  const [data, setData] = useRecoilState(DataState);

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
    <StyledList>
      <h1>목록</h1>
      <h2>할일이 {data.length}개 있어요!!</h2>
      <div>
        {data.map((item) => (
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

List.defaultProps = {};

export default List;
