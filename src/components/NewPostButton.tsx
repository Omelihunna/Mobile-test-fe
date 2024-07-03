import React from "react";

const NewPostButton: React.FC = () => {
    return (
        <button className="flex justify-center items-center w-[97px] h-8 relative px-2 rounded-3xl bg-[#0d479b]">
            <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-3 h-3 relative"
                preserveAspectRatio="none"
            >
                <path
                    d="M6 2V10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M8.5 4.49998C8.5 4.49998 6.6588 2.00001 6 2C5.3412 2 3.5 4.5 3.5 4.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-2">
                <p className="flex-grow-0 flex-shrink-0 text-xs font-semibold text-center text-white">
                    New post
                </p>
            </div>
        </button>
    )
}

export default NewPostButton