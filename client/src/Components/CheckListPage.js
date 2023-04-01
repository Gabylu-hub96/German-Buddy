import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";
import CheckListCard from "./CheckListCard";

const CheckListPage = () => {
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

        if (!res.data || !res.data._id) {
          console.log("couldn't get currently logged in user");
          return;
        }
        // get checkLists for user
        axios
          .get("/api/checkList/forUser/" + res.data._id)
          .then((response) => {
            console.log("response", response.status, response.data);
            if (
              response.status == 201 &&
              (response.data == null || response.data.length === 0)
            ) {
              // If user has no checkLists, create checkLists for user
              axios
                .post("/api/checkList/forUser/" + res.data._id)
                .then((res) => {
                  setCheckLists(res.data);
                });
            } else {
              setCheckLists(response.data);
              console.log("this here!", response.data);
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => {
        console.log(err.response.data, "blargy");
      });
  }, []);

  // handleAddTask(() => {
  //   checkLists.add({
  //     title: textFieldTitle.text,
  //     description: textFielddescription.text,
  //     isCompleted: false,
  //   });
  // });

  // handleSaveCheckList((checkList) => {
  //   axios
  //     .put("/api/checkList/" + checkList._id, checkList);

  //     reload(data);
  // })

  return (
    <>
      {checkLists?.length == 0 ? (
        <h1>CheckLists currently unavailable, please try again in 5 minutes</h1>
      ) : (
        <>
          <h1>We have {checkLists?.length} checkLists for you!</h1>
          <div className="checkLists">
            {checkLists.map((checkList) => (
              <CheckListCard
                checkList={checkList}
                checkLists={checkLists}
                setCheckLists={setCheckLists} // not working
                key={checkList._id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default CheckListPage;
