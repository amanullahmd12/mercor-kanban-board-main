import { useState } from "react";
import { useDispatch} from "react-redux";



import Logo from "../assets/logo-mobile.svg";

import home from "../assets/sidebar-icons/home.svg"
import arrow from "../assets/sidebar-icons/arrow.svg"
import message from "../assets/sidebar-icons/message.svg"
import member from "../assets/sidebar-icons/member.svg"
import task from "../assets/sidebar-icons/task.svg"
import settings from "../assets/sidebar-icons/settings.svg"
import add from "../assets/sidebar-icons/add.svg"
import thoughts from "../assets/sidebar-icons/thoughtTime.svg"


import showSidebarIcon from "../assets/icon-show-sidebar.svg";

import AddEditBoardModal from "../modals/AddEditBoardModal";

function Sidebar({ isSideBarOpen, setIsSideBarOpen }) {
  const dispatch = useDispatch();
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen((curr) => !curr);
  };

  return (
    <div >
    <div
    className={
      isSideBarOpen
        ? `max-w-[261px] bg-white mt-[-250px] fixed items-center left-0 z-50 text-black-600`
        : ` bg-[#635FC7] text-black-600 top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed  w-[56px] h-[48px] rounded-r-full  `
    }
  >
        <div>
          {/* reWrite modal  */}

          {isSideBarOpen && (
            <div className=" border-2 border-[#f5f5f5] z-50 bg-white  border-1  w-full   py-4 rounded-xl">

              <div className="  dropdown-borad flex flex-col justify-between ">
                <div>
   
                <div className=" flex items-center space-x-2  md:space-x-4">
                <img src={Logo} alt=" Logo " className="" />
                <h4 className=" md:text-[18px]  hidden md:inline-block font-bold  font-inter">
                  Project M
                </h4>
                
                <div className=" flex items-center ">
                {isSideBarOpen ? (
                  <div
                    onClick={() => toggleSidebar()}
                    className=" flex  items-center mt-3  bottom-16  text-lg font-bold  rounded-r-full hover:text-[#635FC7] cursor-pointer mr-6 mb-8 px-8 py-4 hover:bg-[#635fc71a] space-x-2 justify-center  my-4 text-gray-900 "
                  >

                    {isSideBarOpen && <img src={arrow}/>}
                  </div>
                ) : (
                  <div className=" absolute p-5  " onClick={() => toggleSidebar()}>
                    <img src={showSidebarIcon} alt="showSidebarIcon" />
                  </div>
                )}
                </div>
              </div>
                <hr/>
                    <div
                      className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-500 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
                       `}
 

                    >
                      <img src={home} className=" " />{" "}
                      <span className=" text-lg">Home</span>

                    </div>
                    <div
                    className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
                     `}

                  >

                    <img src={message} className=" " />{" "}
                    <p className=" text-lg ">Messages</p>

                  </div>
                  <div
                  className={` flex items-baseline space-x-2 px-2 py-2 mr-8 rounded-r-md duration-200 ease-in-out  cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
                   `}
                >
                  <img src={task} className=" " />{" "}
                  <p className=" text-lg  ">Tasks</p>
                  
                </div>
                <div
                className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
                 `}
              
                
              >
                <img src={member} className=" " />{" "}
                <p className=" text-lg ">Members</p>
                
              </div>
              <div
              className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
               `}
            
            >
              <img src={settings} className=" " />{" "}
              <p className=" text-lg  ">Settings</p>
              
            </div>
        <hr/>

        <div className="flex">
                    <p className=" text-lg font-bold item-center ml-4 mt-3 text-[#787486]">MY PROJECTS </p>
                    <div
                    className=" flex  items-baseline space-x-2  rounded-r-full duration-200 ease-in-out cursor-pointer text-[#635fc7] px-5 py-4 hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]  "
                    onClick={() => {
                      setIsBoardModalOpen(true);
                    }}
                  >
                    <img src={add} className="" />
                  </div>
                </div>
                <div
          className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer bg-[#635fc71a] hover:bg-[#c4c2ff1a] hover:text-[#635fc7] text-[#787486]
           `}
        
        >
        <span className="w-[8px] h-[8px] rounded-full bg-[#7AC555]"></span>
          <p className=" text-lg  ">Mobile App</p>
          
        </div>
        <div
              className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
               `}
            
            >
            <span className="w-[8px] h-[8px] rounded-full bg-[#FFA500]"></span>
              <p className=" text-lg  ">WebSite Redesign</p>
              
            </div>
            <div
              className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
               `}
            
            >
            <span className="w-[8px] h-[8px] rounded-full bg-[#E4CCFD]"></span>
              <p className=" text-lg  ">Design System</p>
              
            </div>
            <div
              className={` flex items-baseline space-x-2 px-2 mr-8 rounded-r-md duration-200 ease-in-out py-2 cursor-pointer hover:bg-[#635fc71a] hover:text-[#635fc7] text-[#787486]
               `}
            
            >
            <span className="w-[8px] h-[8px] rounded-full bg-[#76A5EA]"></span>
              <p className=" text-lg  ">Wireframes</p>
              
            </div>
                </div>
                <div className="mt-[]">
                <img src={thoughts} className="ml-12  mt-[0px] relative z-20"  width="180px" height="180px"/>
                <input type="search" placeholder="Message" className="bg-[#fff] text-xs px-3 py-2 w-3/6 mt-[-20%] z-50 absolute  ml-[60px] rounded-md text-neutral-400 "/>
                </div>
              </div>
            </div>
          )}
          
          {/* Sidebar hide/show toggle */}
          {isSideBarOpen ? (
            <div
              onClick={() => toggleSidebar()}
              className=" flex  items-center mt-2  absolute bottom-16  text-lg font-bold  rounded-r-full hover:text-[#635FC7] cursor-pointer mr-6 mb-8 px-2 py-2 hover:bg-[#635fc71a]   space-x-2 justify-center  my-4 text-gray-500 "
            >
            
              {isSideBarOpen && <img src={arrow}/>}
            </div>
          ) : (
            <div className=" absolute p-5  " onClick={() => toggleSidebar()}>
              <img src={showSidebarIcon} alt="showSidebarIcon" />
            </div>
          )}
        </div>
      </div>

      {isBoardModalOpen && (
        <AddEditBoardModal
          type="add"
          setIsBoardModalOpen={setIsBoardModalOpen}
        />
      )}
    </div>
  );
}

export default Sidebar;
