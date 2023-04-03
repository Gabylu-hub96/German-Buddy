import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams, useNavigate, Link } from "react-router-dom";

const CheckListCard = (props) => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState(props.checkList);

  // useEffect(() => {
  //   axios
  //     .get("/api/checkList/forUser/")
  //     .then((res) => setCheckList(res.data))
  //     .catch((e) => console.log(e));
  // }, []);

  const handleChange = (doc) => {
    console.log("doc", doc);
    // setCheckList({ ...checkList, [documents]: newDocuments });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .put()
  //     .then((res) => navigate("/"))
  //     .catch((e) => console.log(e));
  // };

  return (
    <>
      <div className="checkList">
        <div></div>
        <h1>Checklist of necessary documents for {checkList.category}</h1>
        {checkList.documents.map((document) => {
          return (
            <div key={document._id}>
              <h4>
                <input
                  type="checkbox"
                  onChange={() => handleChange(document)}
                />
                {document.title}
              </h4>
              <p>{document.description}</p>
            </div>
          );
        })}
        <h1>Checklist of necessary steps for {checkList.category}</h1>
        {checkList.steps.map((step) => {
          return (
            <div key={step._id}>
              <h4>
                {" "}
                <input type="checkbox" />
                {step.title}
              </h4>

              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CheckListCard;
