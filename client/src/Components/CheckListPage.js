// var checklists = ....request("localhost:9000/api/checkList/forUser/{userId}")

// checklists.map(... <ChecklistCard>)
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CheckListCard from "./CheckListCard";

function CheckListPage({ userId }) {
  const [checkLists, setCheckLists] = useState([]);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_SERVER_BASE_URL +
          "/api/checkList/forUser/" +
          userId
      )
      .then((res) => {
        console.log(res.data, "JJJ");
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