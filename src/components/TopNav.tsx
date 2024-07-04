import React from "react";
import ThiscreetIcon from "../assets/icon.png";
import NotificationIcon from "../assets/notification.png";

const TopNav: React.FC = () => {
  return (
    <section id="top-nav" className="w-full fixed top-0 p-4 bg-white z-10 shadow-md">
      <div className="flex justify-between items-center max-w-screen-sm mx-auto">
        <div className="flex items-center">
          <img className="w-8 h-7 mr-2" src={ThiscreetIcon} alt="Thiscreet Icon" />
          <p className="text-xl font-bold">Thiscreet</p>
        </div>
        <div className="flex items-center">
          <img className="w-6 h-6" src={NotificationIcon} alt="Notification Icon" />
        </div>
      </div>
    </section>
  );
};

export default TopNav;
