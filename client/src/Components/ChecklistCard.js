import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams, useNavigate, Link } from "react-router-dom";

const ChecklistCard = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState(props.checkList);
  const handleDelete = () => {
    axios
      .delete(`/api/checkLists/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="checkList">
        <h1>{checkList.title}</h1>
        {checkList.tasks.map((task, index) => {
          return (
            <div>
              <h3 key={index}>{task.title}</h3>
              <p key={index}>{task.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChecklistCard;
