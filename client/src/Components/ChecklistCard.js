import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams, useNavigate, Link } from "react-router-dom";

const CheckListCard = (props) => {
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
      <div className="checkList" key={checkList?._id}>
        <h1>{checkList?.title}</h1>
        {checkList.tasks.map((task) => {
          <p key={task._id}>{task.title}</p>;
        })}
      </div>
    </>
  );
};
export default CheckListCard;
