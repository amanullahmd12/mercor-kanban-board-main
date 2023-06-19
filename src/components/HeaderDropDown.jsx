import { useState } from "react";




import home from "../assets/sidebar-icons/home.svg"
import message from "../assets/sidebar-icons/message.svg"
import member from "../assets/sidebar-icons/member.svg"
import task from "../assets/sidebar-icons/task.svg"
import settings from "../assets/sidebar-icons/settings.svg"
import add from "../assets/sidebar-icons/add.svg"

function HeaderDropDown({ setOpenDropdown, setIsBoardModalOpen }) {





  const boards = useSelector((state) => state.boards);

  return (
    <div
      className=" py-10 px-6 absolute  left-0 right-0 bottom-[-100vh] top-16 dropdown "
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setOpenDropdown(false);
      }}
    >
      {/* DropDown Modal */}

      <div className=" bg-white  shadow-md shadow-[#364e7e1a]  w-full   py-4 rounded-xl">
        <h3 className="  text-gray-600 font-semibold mx-4 mb-8 ">
          ALL BOARDS ({boards?.length})
        </h3>

        <div className=" dropdown-borad  ">
        
            <div
              className={` flex items-baseline space-x-2 px-5 py-4  
             `}
             
            >
              <img src={home} className="" />{" "}
              <p className=" text-lg font-bold  ">Home</p>
            </div>
            <div
              className={` flex items-baseline space-x-2 px-5 py-4  
             `}
             
            >
              <img src={message} className="" />{" "}
              <p className=" text-lg font-bold  ">Messages</p>
            </div>
            <div
              className={` flex items-baseline space-x-2 px-5 py-4  
             `}
             
            >
              <img src={task} className="" />{" "}
              <p className=" text-lg font-bold  ">Tasks</p>
            </div>
        
            <div
            className={` flex items-baseline space-x-2 px-5 py-4  
           `}
           
          >
            <img src={member} className="" />{" "}
            <p className=" text-lg font-bold  ">Members</p>
          </div>

          <div
              className={` flex items-baseline space-x-2 px-5 py-4  
             `}
             
            >
              <img src={settings} className="" />{" "}
              <p className=" text-lg font-bold  ">Settings</p>
            </div>
<hr/>
          <div 
          onClick={() => {
            setIsBoardModalOpen(true);
            setOpenDropdown(false)
          }}
          className=" flex items-baseline space-x-2  text-[#635fc7] px-5 py-4  ">
          <p className=" text-lg font-bold  ">MY PROJECTS</p>
            <img src={add} className="   filter-white  h-4 " />
          </div>


          <div
          className={` flex items-baseline space-x-2 px-5 py-4  
         `}
         
        >
        <span className="w-[8px] h-[8px] rounded-full bg-[#7AC555]"></span>
        <p className=" text-lg  ">Mobile App</p>
        </div>

        <div
        className={` flex items-baseline space-x-2 px-5 py-4  
       `}
       
      >
      <span className="w-[8px] h-[8px] rounded-full bg-[#FFA500]"></span>
              <p className=" text-lg  ">WebSite Redesign</p>
      </div>
         

      <div
      className={` flex items-baseline space-x-2 px-5 py-4  
     `}
     
    >
    <span className="w-[8px] h-[8px] rounded-full bg-[#E4CCFD]"></span>
    <p className=" text-lg  ">Design System</p>
    </div>
       

    <div
    className={` flex items-baseline space-x-2 px-5 py-4  
   `}
   
  >
  <span className="w-[8px] h-[8px] rounded-full bg-[#76A5EA]"></span>
              <p className=" text-lg  ">Wireframes</p>
              
  </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderDropDown;
