import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams, useNavigate, Link } from "react-router-dom";

const CheckListCard = (props) => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState(props.checkList);

  // this deletes the checkList
  const handleDeleteCheckList = () => {
    axios
      .delete("/api/checkList/" + checkList._id)
      .then(
        (res) => navigate(0) // this reloads the myChecklists page (this checkList will disappear)
      )
      .catch((e) => console.log(e));
  };

  // // this updates the checkList
  // const handleSaveCheckList = () => {
  //   axios
  //     .update("/api/checkList/" + checkList._id)
  //     .then((res) => {})
  //     .catch((e) => console.log(e));
  // };

  return (
    <>
      <div className="checkList">
        <div>
          <button onClick={handleDeleteCheckList}>delete</button>
          {/* <button onClick={handleSaveCheckList}>save</button> */}
        </div>
        <h1>{checkList.title}</h1>
        {checkList.tasks.map((task) => {
          return (
            <div key={task._id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CheckListCard;
