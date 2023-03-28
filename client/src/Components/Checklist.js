// var checklists = ....request("localhost:9000/api/checkList/forUser/{userId}")

// checklists.map(... <ChecklistCard>)
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CheckList({ userId }) {
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
      <div className="checkList-container">
        {checkLists.map((checkList) => (
          <div className="checkList">
            <h1>{checkList.title}</h1>
            <ul>
              {checkList.tasks.map((task) => (
                <li>{task.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
export default CheckList;
