import React from "react";
import style from "./AllList.module.css";
import { AiOutlineCheckCircle, AiOutlineCloseSquare } from "react-icons/ai";

const AllList = ({ item, handleDelete, id }) => {
  return (
    <div>
      <ol className={style.contents}>
        <span onClick={() => handleDelete(id)} className={style.logo}>
          {" "}
          <AiOutlineCloseSquare />{" "}
        </span>
        <li className={style.addedItems}>
          {item}{" "}
          <span className={style.check}>
            <AiOutlineCheckCircle />
          </span>
        </li>
      </ol>
    </div>
  );
};

export default AllList;
