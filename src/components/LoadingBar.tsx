import React from 'react';
import { PollOption } from './PollPost';

interface LoadingBarProps {
    option: PollOption
}

const LoadingBar: React.FC<LoadingBarProps> = ({ option }) => {
    const barWidth = `${option.percentage}%`;

    return (
        <div className="flex justify-start items-center w-[300px] relative overflow-hidden gap-2 p-2 rounded-full bg-[#c2d9fa] border-[0.5px] border-[#2d82eb]">
            <div
                className="flex flex-col justify-start items-start h-full absolute left-0 top-0 gap-2"
                style={{ width: barWidth }}
            >
                <svg
                    width="100%"
                    height={34}
                    viewBox="0 0 186 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-stretch flex-grow"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0.691895H186V33.6919H0V0.691895Z" fill={option.color} />
                </svg>
            </div>
            <p className="w-[214px] text-sm text-left text-white z-10">{option.text}</p>
            <p className="text-sm text-right text-[#0d479b]">{option.percentage}%</p>
        </div>
    );
};

export default LoadingBar;
