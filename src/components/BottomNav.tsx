import React from "react";

const BottomNav: React.FC = () => {
    return (
        <div
            className="flex flex-col justify-start items-center w-full max-w-screen-sm gap-2.5 px-4 py-5 rounded-tl-[10px] rounded-tr-[10px] fixed bottom-0 bg-white"
            style={{ boxShadow: "0px -6px 43.400001525878906px -12px rgba(97,97,97,0.18)" }}
        >
            <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col justify-center items-center flex-grow gap-2">
                    <div className="flex justify-center items-center w-11 relative gap-2 px-3 py-1 rounded-2xl bg-[#d6efff]">
                        <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M8.30137 4.02194L3.44926 8.26778C3.03317 8.63192 3.31215 9.27858 3.88532 9.27858C4.23549 9.27858 4.51937 9.54075 4.51937 9.86425V12.5672C4.51937 14.8925 4.51937 16.0552 5.30147 16.7776C6.08357 17.5 7.34235 17.5 9.85992 17.5H11.6401C14.1577 17.5 15.4164 17.5 16.1985 16.7776C16.9807 16.0552 16.9807 14.8925 16.9807 12.5672V9.86425C16.9807 9.54075 17.2645 9.27858 17.6147 9.27858C18.1878 9.27858 18.4668 8.63192 18.0508 8.26778L13.1986 4.02194C12.0391 3.00732 11.4593 2.5 10.75 2.5C10.0407 2.5 9.46092 3.00732 8.30137 4.02194Z"
                                stroke="#0D479B"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10.75 13.3335H10.7575"
                                stroke="#0D479B"
                                stroke-width={2}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow gap-2">
                    <div className="flex justify-center items-center w-11 relative gap-2 px-3 py-1 rounded-2xl">
                        <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M15.2498 15.5993C15.4561 15.6163 15.6647 15.625 15.8754 15.625C16.749 15.625 17.5877 15.4756 18.3674 15.201C18.3727 15.1347 18.3754 15.0677 18.3754 15C18.3754 13.6193 17.2561 12.5 15.8754 12.5C15.3523 12.5 14.8668 12.6606 14.4655 12.9352M15.2498 15.5993C15.2499 15.6079 15.2499 15.6164 15.2499 15.625C15.2499 15.8125 15.2396 15.9976 15.2195 16.1797C13.7555 17.0197 12.0588 17.5 10.2499 17.5C8.44099 17.5 6.74427 17.0197 5.2803 16.1797C5.2602 15.9976 5.24988 15.8125 5.24988 15.625C5.24988 15.6165 5.2499 15.6079 5.24994 15.5994M15.2498 15.5993C15.2449 14.6188 14.9577 13.7051 14.4655 12.9352M14.4655 12.9352C13.5772 11.546 12.0211 10.625 10.2499 10.625C8.47887 10.625 6.92292 11.5458 6.03462 12.9347M6.03462 12.9347C5.6334 12.6604 5.14818 12.5 4.62549 12.5C3.24478 12.5 2.12549 13.6193 2.12549 15C2.12549 15.0677 2.12818 15.1347 2.13345 15.201C2.91315 15.4756 3.75188 15.625 4.62549 15.625C4.83577 15.625 5.04404 15.6163 5.24994 15.5994M6.03462 12.9347C5.54213 13.7047 5.25486 14.6187 5.24994 15.5994M12.7499 5.625C12.7499 7.00571 11.6306 8.125 10.2499 8.125C8.86917 8.125 7.74988 7.00571 7.74988 5.625C7.74988 4.24429 8.86917 3.125 10.2499 3.125C11.6306 3.125 12.7499 4.24429 12.7499 5.625ZM17.7499 8.125C17.7499 9.16053 16.9104 10 15.8749 10C14.8393 10 13.9999 9.16053 13.9999 8.125C13.9999 7.08947 14.8393 6.25 15.8749 6.25C16.9104 6.25 17.7499 7.08947 17.7499 8.125ZM6.49988 8.125C6.49988 9.16053 5.66041 10 4.62488 10C3.58934 10 2.74988 9.16053 2.74988 8.125C2.74988 7.08947 3.58934 6.25 4.62488 6.25C5.66041 6.25 6.49988 7.08947 6.49988 8.125Z"
                                stroke="#888F92"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow gap-2">
                    <div className="flex justify-center items-center relative gap-2 px-3 py-1 rounded-2xl">
                        <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M10.75 16.875C14.8921 16.875 18.25 13.797 18.25 10C18.25 6.20304 14.8921 3.125 10.75 3.125C6.60786 3.125 3.25 6.20304 3.25 10C3.25 11.6963 3.92016 13.249 5.03101 14.448C5.45322 14.9037 5.76916 15.4979 5.58851 16.0923C5.43835 16.5863 5.1889 17.0372 4.86316 17.4216C4.99316 17.4449 5.125 17.4632 5.25806 17.4761C5.4198 17.4919 5.58398 17.5 5.75 17.5C6.81834 17.5 7.80847 17.1649 8.62098 16.5941C9.29588 16.7769 10.0104 16.875 10.75 16.875Z"
                                stroke="#888F92"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-grow gap-2">
                    <div className="flex justify-center items-center relative gap-2 px-3 py-1 rounded-2xl">
                        <svg
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M13.375 5C13.375 6.72589 11.9759 8.125 10.25 8.125C8.52414 8.125 7.12503 6.72589 7.12503 5C7.12503 3.27411 8.52414 1.875 10.25 1.875C11.9759 1.875 13.375 3.27411 13.375 5Z"
                                stroke="#888F92"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M4.00098 16.7652C4.05956 13.3641 6.83492 10.625 10.25 10.625C13.6652 10.625 16.4406 13.3642 16.4991 16.7654C14.5968 17.6383 12.4804 18.125 10.2503 18.125C8.02003 18.125 5.90344 17.6383 4.00098 16.7652Z"
                                stroke="#888F92"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomNav