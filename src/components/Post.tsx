import React, { useState } from "react";
import GroupIcon from "../assets/group-icon.svg"
import LikeIcon from "../assets/like-icon.svg"
import ForwardIcon from "../assets/forward-icon.svg"
import avatar from "../assets/avatar.png"
import { IPost } from "../constants/constants";

interface PostProps {
    post: IPost
}

const Post: React.FC<PostProps> = ({ post }) => {
    const [likeCount, setlikeCount] = useState(post.likeCount);
    const [forwardCount, setforwardCount] = useState(post.forwardCount);

    const addLike = () => {
        setlikeCount(likeCount + 1)
        post.likeCount++
    }

    const forward = () => {
        setforwardCount(forwardCount + 1)
        post.forwardCount++
    }

    return (
        <section id="post" className="max-w-screen-sm">
            <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
                <div className="flex flex-col justify-start items-start self-stretch gap-6">
                    <div className="flex flex-col justify-start items-start self-stretch gap-4">
                        <div className="flex flex-col justify-start items-center self-stretch gap-2">
                            <div className="flex justify-start items-center self-stretch gap-4 px-16">
                                <div className="flex justify-start items-center relative gap-2">
                                    <img className="w-4 h-4" src={GroupIcon} alt="" />
                                    <p className="text-xs text-left text-[#666362]">
                                        Family crisis
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
                                <div className="flex justify-start items-start flex-grow relative gap-4">
                                <img className="w-6 h- rounded-[32px] " src={avatar}/>
                                    <div className="flex flex-col justify-start items-center flex-grow gap-2">
                                        <div className="flex justify-start items-center self-stretch relative gap-2">
                                            <p className="text-sm font-medium text-left text-[#545454]">
                                                {post.username}
                                            </p>
                                            <p className="text-xs text-left text-[#545454]">1d</p>
                                        </div>
                                        <div className="flex flex-col justify-start items-start self-stretch gap-2">
                                            <div className="flex justify-start relative gap-2">
                                                <p className="text-base text-left text-[#101010]">
                                                    {post.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 relative"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M10 5.625C9.65482 5.625 9.375 5.34518 9.375 5C9.375 4.65482 9.65482 4.375 10 4.375C10.3452 4.375 10.625 4.65482 10.625 5C10.625 5.34518 10.3452 5.625 10 5.625Z"
                                        stroke="#565D60"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10 10.625C9.65482 10.625 9.375 10.3452 9.375 10C9.375 9.65482 9.65482 9.375 10 9.375C10.3452 9.375 10.625 9.65482 10.625 10C10.625 10.3452 10.3452 10.625 10 10.625Z"
                                        stroke="#565D60"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10 15.625C9.65482 15.625 9.375 15.3452 9.375 15C9.375 14.6548 9.65482 14.375 10 14.375C10.3452 14.375 10.625 14.6548 10.625 15C10.625 15.3452 10.3452 15.625 10 15.625Z"
                                        stroke="#565D60"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
                            <div className="flex justify-start items-center self-stretch gap-6">
                                <div className="flex justify-start items-center flex-grow gap-4">
                                    <div className="flex justify-start items-center relative gap-1 p-0.5">
                                        <button onClick={addLike}>
                                            <img className="w-5 h-5" src={LikeIcon} alt="" />
                                        </button>
                                        <p className="text-xs text-left text-[#545454]">{post.likeCount}</p>
                                    </div>
                                    <div className="flex justify-end items-center relative gap-1 p-0.5">
                                        <svg
                                            width={20}
                                            height={21}
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 relative"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M7.1875 10.6919C7.1875 10.8645 7.04759 11.0044 6.875 11.0044C6.70241 11.0044 6.5625 10.8645 6.5625 10.6919C6.5625 10.5193 6.70241 10.3794 6.875 10.3794C7.04759 10.3794 7.1875 10.5193 7.1875 10.6919ZM7.1875 10.6919H6.875M10.3125 10.6919C10.3125 10.8645 10.1726 11.0044 10 11.0044C9.82741 11.0044 9.6875 10.8645 9.6875 10.6919C9.6875 10.5193 9.82741 10.3794 10 10.3794C10.1726 10.3794 10.3125 10.5193 10.3125 10.6919ZM10.3125 10.6919H10M13.4375 10.6919C13.4375 10.8645 13.2976 11.0044 13.125 11.0044C12.9524 11.0044 12.8125 10.8645 12.8125 10.6919C12.8125 10.5193 12.9524 10.3794 13.125 10.3794C13.2976 10.3794 13.4375 10.5193 13.4375 10.6919ZM13.4375 10.6919L13.125 10.6919M17.5 10.6919C17.5 14.4889 14.1421 17.5669 10 17.5669C9.26044 17.5669 8.54588 17.4688 7.87098 17.286C7.05847 17.8568 6.06834 18.1919 5 18.1919C4.83398 18.1919 4.6698 18.1838 4.50806 18.168C4.375 18.155 4.24316 18.1368 4.11316 18.1135C4.5161 17.638 4.80231 17.0608 4.92824 16.4259C5.00378 16.045 4.81725 15.6751 4.53903 15.4043C3.27475 14.1737 2.5 12.5157 2.5 10.6919C2.5 6.89494 5.85786 3.81689 10 3.81689C14.1421 3.81689 17.5 6.89494 17.5 10.6919Z"
                                                stroke="#565D60"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p className="text-xs text-left text-[#545454]">1.4k</p>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
                                    <button onClick={forward}>
                                        <img className="w-5 h-5" src={ForwardIcon} alt="" />
                                    </button>
                                    <p className="text-xs text-left text-[#545454]">{post.forwardCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg
                    width={390}
                    height={2}
                    viewBox="0 0 390 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="self-stretch h-0 relative"
                    preserveAspectRatio="none"
                >
                    <path d="M0 1.19189L390 1.19189" stroke="#F6F6F6" stroke-linecap="round" />
                </svg>
            </div>
        </section>
    )
}

export default Post