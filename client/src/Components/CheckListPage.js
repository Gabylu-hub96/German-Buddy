import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import CheckListCard from "./CheckListCard";

const CheckListPage = () => {
  const [checkLists, setCheckLists] = useState([]);

  useEffect(() => {
    axios
      .get("/api/checkList/forUser/" + "6422193e01a7e66ee86c7348")
      .then((res) => {
        console.log(res.data);
        setCheckLists(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="checkLists">
        {checkLists.map((checkList) => (
          <CheckListCard checkList={checkList} />
        ))}
      </div>
    </>
  );
};
export default CheckListPage;
