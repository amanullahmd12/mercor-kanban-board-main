import { shuffle } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import Task from "./Task";
import AddEditTaskModal from "../modals/AddEditTaskModal";
import add from "../assets/body-icons/addButton.svg"

function Column({ colIndex }) {
  const colors = [
    "bg-orange-500",
    "bg-green-500",
    "bg-indigo-500",
  ];


  const dispatch = useDispatch();
  const [color, setColor] = useState(null)
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const col = board.columns.find((col, i) => i === colIndex);
  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [dispatch]);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const handleOnDrop = (e) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );

    if (colIndex !== prevColIndex) {
      dispatch(
        boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
      );
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
  <>
    <div className="wrap">
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      className=" mx-5 pt-[90px] min-w-[354px] items-center"
    >
    <div className="bg-[#F5F5F5]  pt-4 pb-6 place-self-center rounded-md ">
      <p className=" ml-10 font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
        <div className={`rounded-full w-4 h-4 ${color} `} />
        {col.name} ({col.tasks.length})

      <button
      className=" w-8 h-8 rounded-md  text-blue-900  hidden md:block ml-[180px] "
      onClick={() => {
        setIsTaskModalOpen((prevState) => !prevState);
      }}
    >
    <img src={add}/>
    </button>
    <button
      onClick={() => {
        setIsTaskModalOpen((prevState) => !prevState);
      }}
      className="  w-8 h-8 rounded-md py-1 px-3 md:hidden "
    >
      <img src={add}/>
    </button>

      </p>

      <div className={`ml-10  mt-10 mb-10 pr-20 w-[300px] h-2 ${color} `} />

      {col.tasks.map((task, index) => (
        <Task key={index} taskIndex={index} colIndex={colIndex} />
      ))}
    </div>
          {isTaskModalOpen && (
            <AddEditTaskModal
              setIsAddTaskModalOpen={setIsTaskModalOpen}
              type="add"
              device="mobile"
            />
          )}
    </div>
</div>
</>
  );
}

export default Column;
