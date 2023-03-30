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
      <div className="checkList card" key={checkList?.id}>
        <h1>{checkList?.title}</h1>
      </div>
    </>
  );
};
export default CheckListCard;
