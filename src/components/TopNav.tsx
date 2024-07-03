import React from "react";
import ThiscreetIcon from "../assets/icon.png"
import NotificationIcon from "../assets/notification.png"

const TopNav: React.FC = () => {
    return (
        <section id="top-nav" className="max-w-screen-sm relative mb-2 top-0 p-4">
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <img className="w-8 h-7" src={ThiscreetIcon} alt="" />
                    <p className="text-xl font-bold">Thiscreet</p>
                </div>
                <div className="flex justify-end absolute right-0">
                    <img className="w-6 h-6" src={NotificationIcon} alt="" />
                </div>
            </div>
        </section>
    )
}

export default TopNav