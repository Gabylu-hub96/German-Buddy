import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../axiosInstance";
const CheckListCard = (props) => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState(props.checkList);

  const handleChange = (myDoc) => {
    const newDocuments = checkList.documents.map((doc) => {
      console.log("WHAT IS THIS???");
      if (doc._id === myDoc._id) {
        doc.isCompleted = !doc.isCompleted;
      }
      return doc;
    });
    setCheckList({ ...checkList, documents: newDocuments });
    axios
      .put(`/api/checkList/${checkList._id}`, {
        ...checkList,
        documents: newDocuments,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

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
                  checked={document.isCompleted}
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
