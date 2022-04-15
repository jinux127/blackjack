const List = ({ list }) => {
  return (
    <section className="List">
      <h1>목록</h1>
      <h2>할일이 {list.length}개 있어요!!</h2>
      <div>
        {list.map((item) => (
          <div className="List_data">
            <div>{item.content}</div>
            <div>{new Date(item.created_date).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default List;
