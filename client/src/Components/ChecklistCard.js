import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CheckListCard({ checkList }) {
  return (
    <>
      <div className="checkList card">
        <h1>{checkList.title}</h1>
        <ol>
          {checkList.tasks.map((task) => (
            <li>{task.title}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default CheckListCard;
