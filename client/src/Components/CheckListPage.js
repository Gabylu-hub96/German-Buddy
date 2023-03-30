// var checklists = ....request("localhost:9000/api/checkList/forUser/{userId}")

// checklists.map(... <ChecklistCard>)
import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import CheckListCard from "./CheckListCard";

function CheckListPage() {
  const [checkLists, setCheckLists] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/checkList/forUser/`)
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
}
export default CheckListPage;
