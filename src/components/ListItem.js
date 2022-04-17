import { useRef, useState } from "react";

const ListItem = ({ onRemove, onEdit, id, content, created_date }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);

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
    <div className="ListItem">
      <div className="content">
        {isEdit ? (
          <textarea
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
            ref={editRef}
          />
        ) : (
          <span>{content}</span>
        )}
      </div>
      <span>{new Date(created_date).toLocaleString()}</span>
      <div className="ListButtons">
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
      </div>
    </div>
  );
};

export default ListItem;
