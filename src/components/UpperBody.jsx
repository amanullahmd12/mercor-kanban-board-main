import invite from "../assets/body-icons/invite.svg"
import link from "../assets/body-icons/link.svg"
import share from "../assets/body-icons/share.svg"
import calender from "../assets/body-icons/calender.svg"
import edit from "../assets/body-icons/edit.svg"

import filter from "../assets/body-icons/filter.svg"

import fourdots from "../assets/body-icons/fourDots.svg"

import blue from "../assets/body-icons/blue.svg"

import participants from "../assets/body-icons/participants.svg"
const UpperBody = () => {

    function makeEditable() {
        var element = document.getElementById("heading");
        element.contentEditable = true;
        selectText(element);
        moveCursorToStart(element);
      }

      function selectText(element) {
        var range = document.createRange();
        range.selectNodeContents(element);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }

      function moveCursorToStart(element) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.setStart(element, 0);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      function sendEmail() {
        var emailAddress = "amanullah.md.2016852@gmail.com";
        var subject = "Hello";
        var body = "Just wanted to say hi!";
        var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        window.location.href = mailtoLink;
      }

  return (
    <div className="md:ml-[300px]">
   <div className="flex justify-between">
   <div className="flex">
    <h1 id="heading" className="md:text-[46px] text-[30px]">Mobile App</h1>
    <img src={edit} className="ml-[19px]" onClick={makeEditable}/>
    <img src={link} className="ml-[12px] hidden md:block"/>
    </div>
    <div className="flex mr-[20px] ">
    <img src={invite} className="hidden md:block mr-[12px]"/>
    <img src={participants} className=""/>
    </div>
    </div>
   
    <div className="flex mt-[40px] justify-between  ">
    <div className="flex"> 
    <img src={filter} className="hidden md:block"/>
    <div className="relative hidden md:block">
     <input type="date"className="bg-[#ffff] text-[#fff] rounded-md pl-12 mt-3" />
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    <img src={calender} alt="Calendar" />
    </div>

    </div>
    </div>
    <div className="flex mr-[20px]">
 
    <img src={share} className=" mr-[20px]" onClick={sendEmail}/>
    <span className="h-[28px] w-[1px] bg-[#787486] mr-[20px] hidden md:block"></span>
    <img src={blue} className="mr-[20px] hidden md:block"/>
    <img src={fourdots} className="hidden md:block "/>
    </div>


    </div>
    </div>
  )
}

export default UpperBody