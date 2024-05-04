import React from "react";
import style from "./footerdashboard.module.css";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import { BiCustomize } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Footerdashboard = () => {
  return (
    <div className={style.footer}>
      <div className={style.foot}>
        <span>
          <FaRegCalendarCheck /> <br />
          My Plan
        </span>
        <span>
          <MdWindow /> <br />
          Workouts
        </span>
        <span>
          <BiCustomize /> <br />
          customize Workout
        </span>
        <span>
          <CgProfile /> <br />
          Profile
        </span>
      </div>
    </div>
  );
};

export default Footerdashboard;
