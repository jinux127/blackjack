import { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import DataState from "../state/DataState";

const StyledListItem = styled.div`
  background-color: rgb(240, 240, 240);
  width: 100%;
  margin: 10px;
`;
const StyledListButton = styled.button`
  margin: 5px;
`;
const StyledContent = styled.div`
  font-weight: bold;
  border-bottom: solid 1px;
  padding: 10px;
  margin: 10px;
`;

const ListItem = ({ id, content, created_date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);

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

  const editRef = useRef();

  const handleRemove = () => {
    onRemove(id);
  };
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleQuitEdit = () => {
    toggleIsEdit();
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (!localContent.length) {
      editRef.current.focus();
      return;
    }

    onEdit(id, localContent);
    toggleIsEdit();
  };
  return (
    <StyledListItem>
      <StyledContent>
        {isEdit ? (
          <textarea
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
            ref={editRef}
          />
        ) : (
          <span>{content}</span>
        )}
      </StyledContent>
      <span>{new Date(created_date).toLocaleString()}</span>
      <StyledListButton>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={handleRemove}>삭제</button>
          </>
        )}
      </StyledListButton>
    </StyledListItem>
  );
};

export default ListItem;
