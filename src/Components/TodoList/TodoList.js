import React, { useState } from "react";
import AllList from "../AllList/AllList";
import style from "./TodoList.module.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  console.log(items);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // ==============Add Item========================
  const addItem = () => {
    const totalItems = [];
    totalItems.push(...items, inputValue);
    setItems(totalItems);

    setInputValue("");
  };

  const handleDelete = (id) => {
    console.log("deleted");

    const rest = items.filter((item) => item.index !== id.index);
    setItems(rest);
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.centerDiv}>
        <div className={style.topDiv}></div>
        <div className={style.content}>
          <h1>ToDo List</h1>
          <input className={style.input} onChange={handleChange} type="text" value={inputValue} placeholder="Add a Item" />
          <button className={style.button} onClick={addItem}>
            +
          </button>
        </div>
        <div className={style.allItems}>
          {items.map((item, index) => (
            <AllList key={index} item={item} id={index} handleDelete={handleDelete}></AllList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
