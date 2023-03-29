import Button from "react-bootstrap/esm/Button";

function CheckListCard({ checkList }) {
  return (
    <>
      <div className="checkList card">
        <h1>{checkList.title}</h1>
        // text field and + button to add task at the end of checklist.tasks//
        <ol>
          {checkList.tasks.map((task) => (
            <li>
              <div>
                {task.title}
                {task.description}
                <button type="submit">
                  <span class="fas fa-plus">+</span>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
export default CheckListCard;
