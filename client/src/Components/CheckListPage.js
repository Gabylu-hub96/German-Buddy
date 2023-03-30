import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import CheckListCard from "./CheckListCard";

const CheckListPage = (props) => {
  const [checkLists, setCheckLists] = useState([]);
  const [user, setUser] = useState([]);
  const [loggedIn, setIsLoggedin] = useState(false);

  useEffect(() => {
    // get loggedInUser
    axios
      .get("/auth/loggedin-user")
      .then((res) => {
        setUser(res.data);
        setIsLoggedin(true);

        if (!user || !user._id) {
          return;
        }
        console.log(user, "user");

        // get checkLists for user
        axios
          .get("/api/checkList/forUser/" + user._id)
          .then((res) => {
            if (
              res.status == 201 &&
              (res.data == null || res.data.length === 0)
            ) {
              // If user has no checkLists, create checkLists for user
              axios.post("/api/checkList/forUser/" + user._id).then((res) => {
                setCheckLists(res.data);
              });
            } else {
              setCheckLists(res.data);
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <h1>We have {checkLists?.length} checkLists for you!</h1>
      <div className="checkLists">
        {checkLists.map((checkList) => (
          <CheckListCard checkList={checkList} />
        ))}
      </div>
    </>
  );
};
export default CheckListPage;
