import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "../axiosInstance";
import ProgressBar from "react-bootstrap/ProgressBar";

const CheckListCard = (props) => {
  const navigate = useNavigate();
  const [checkList, setCheckList] = useState(props.checkList);
  const [docsPercentage, setDocsPercentage] = useState(
    handleProgressBar(props.checkList.documents)
  );
  const [stepsPercentage, setStepsPercentage] = useState(
    handleProgressBar(props.checkList.steps)
  );

  const handleChange = (myDoc) => {
    const newDocuments = checkList.documents.map((doc) => {
      if (doc._id === myDoc._id) {
        doc.isCompleted = !doc.isCompleted;
      }
      return doc;
    });
    setCheckList({ ...checkList, documents: newDocuments });
    setDocsPercentage(handleProgressBar(newDocuments));
    axios
      .put(`/api/checkList/${checkList._id}`, {
        ...checkList,
        documents: newDocuments,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  function handleProgressBar(docs) {
    const progress = docs.reduce((acc, curr) => {
      console.log("current", curr.isCompleted);
      return (acc += curr.isCompleted ? 1 : 0);
    }, 0);
    console.log("progress", progress);
    return (progress / docs.length) * 100;
  }

  const handleStepChange = (myStep) => {
    const newSteps = checkList.steps.map((step) => {
      if (step._id === myStep._id) {
        step.isCompleted = !step.isCompleted;
      }
      return step;
    });
    setCheckList({ ...checkList, steps: newSteps });
    setStepsPercentage(handleProgressBar(newSteps));
    axios
      .put(`/api/checkList/${checkList._id}`, {
        ...checkList,
        steps: newSteps,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  function handleProgressBar(steps) {
    const progress = steps.reduce((acc, curr) => {
      console.log("current", curr.isCompleted);
      return (acc += curr.isCompleted ? 1 : 0);
    }, 0);
    console.log("progress", progress);
    return (progress / steps.length) * 100;
  }

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
        <ProgressBar
          animated
          now={docsPercentage}
          label={`${Math.ceil(docsPercentage)}%`}
        />
        <h1>Checklist of necessary steps for {checkList.category}</h1>
        {checkList.steps.map((step) => {
          return (
            <div key={step._id}>
              <h4>
                {" "}
                <input
                  type="checkbox"
                  checked={step.isCompleted}
                  onChange={() => handleStepChange(step)}
                />
                {step.title}
              </h4>
              <p>{step.description}</p>
            </div>
          );
        })}
        <ProgressBar
          animated
          now={stepsPercentage}
          label={`${Math.ceil(stepsPercentage)}%`}
        />
      </div>
    </>
  );
};
export default CheckListCard;
