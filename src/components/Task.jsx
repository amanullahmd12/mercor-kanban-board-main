import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import TaskModal from "../modals/TaskModal";
import Profile from "../assets/body-icons/profiles.svg"
import { shuffle } from "lodash";


function Task({ colIndex, taskIndex }) {

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-sky-500",
  ];

  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;
  const col = columns.find((col, i) => i === colIndex);
  const task = col.tasks.find((task, i) => i === taskIndex);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);


  const dispatch = useDispatch();
  const [color, setColor] = useState(null)
  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [dispatch]);

  let completed = 0;
  let subtasks = task.subtasks;
  subtasks.forEach((subtask) => {
    if (subtask.isCompleted) {
      completed++;
    }
  });

 

  const handleOnDrag = (e) => {
    e.dataTransfer.setData(
      "text",
      JSON.stringify({ taskIndex, prevColIndex: colIndex })
    );
  };

  return (
    <div>
      <div
        onClick={() => {
          setIsTaskModalOpen(true);
        }}
        draggable
        onDragStart={handleOnDrag}
        className=" w-[314px] ml-8 first:my-5 rounded-lg  bg-white  shadow-[#364e7e1a] py-6 px-3 shadow-lg  cursor-pointer "
      >
      <div className={`inline-block whitespace-nowrap h-[23px] ${color} text-[#fff] text-center px-2 rounded-lg content-center`} >{task.label}</div>
      <p className="text-[#0D062D] hover:text-[#635fc7] font-bold tracking-wide ">{task.title}</p>
      <span className="text-[#787486] tracking-wide ">{task.description}</span>
      <img src={task.imageURL}/>
      <img src={Profile}/>
      {isTaskModalOpen && (
        <TaskModal
          colIndex={colIndex}
          taskIndex={taskIndex}
          setIsTaskModalOpen={setIsTaskModalOpen}
        />
        )}
    </div>
    </div>
     
  );
}

export default Task;
