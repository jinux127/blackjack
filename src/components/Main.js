import { useRef, useState } from "react";
import List from "./List";
import Todo from "./Todo";

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

  return (
    <section className="Main">
      <Todo onCreate={onCreate} />
      <List list={data} />
    </section>
  );
};

export default Main;
