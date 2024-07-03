// import React from "react";

// const Test: React.FC = () => {
//     return (
//         <div className="flex flex-col justify-start items-start w-[390px] h-[844px] relative overflow-hidden gap-4 bg-white">
//             <div className="flex flex-col justify-start items-start self-stretch gap-4 pt-36 pb-24">
//                 <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                     <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-6">
//                             <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                 <div className="flex flex-col justify-start items-center self-stretch gap-2">
//                                     <div className="flex justify-start items-center self-stretch gap-4 px-16">
//                                         <div className="flex justify-start items-center relative gap-2">
//                                             <svg
//                                                 width={16}
//                                                 height={17}
//                                                 viewBox="0 0 16 17"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="w-4 h-4 relative"
//                                                 preserveAspectRatio="xMidYMid meet"
//                                             >
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5C6.61929 7.5 5.5 6.38071 5.5 5Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M10.5 7C10.5 5.89543 11.3954 5 12.5 5C13.6046 5 14.5 5.89543 14.5 7C14.5 8.10457 13.6046 9 12.5 9C11.3954 9 10.5 8.10457 10.5 7Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M1.5 7C1.5 5.89543 2.39543 5 3.5 5C4.60457 5 5.5 5.89543 5.5 7C5.5 8.10457 4.60457 9 3.5 9C2.39543 9 1.5 8.10457 1.5 7Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M4.20657 10.5783C5.00522 9.32961 6.40557 8.5 8 8.5C9.59463 8.5 10.9951 9.32981 11.7937 10.5788C12.3458 11.4423 12.5847 12.4835 12.4726 13.4986C12.4551 13.6573 12.3629 13.798 12.2245 13.8774C10.9796 14.5917 9.53672 15 8 15C6.46328 15 5.02039 14.5917 3.7755 13.8774C3.63706 13.798 3.54486 13.6573 3.52736 13.4986C3.41529 12.4833 3.65427 11.4419 4.20657 10.5783Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     d="M3.38819 10.0025C3.38016 10.0148 3.37218 10.0272 3.36425 10.0396C2.72061 11.0459 2.42605 12.2445 2.51648 13.426C2.11111 13.3644 1.7178 13.2654 1.34029 13.1324L1.26365 13.1055C1.12384 13.0562 1.02615 12.9293 1.01439 12.7815L1.00795 12.7005C1.00268 12.6343 1 12.5674 1 12.5C1 11.1568 2.05936 10.0609 3.38819 10.0025Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     d="M13.4838 13.426C13.5742 12.2447 13.2797 11.0464 12.6363 10.0401C12.6283 10.0275 12.6202 10.015 12.6121 10.0025C13.9408 10.0611 15 11.1568 15 12.5C15 12.5674 14.9973 12.6343 14.9921 12.7005L14.9856 12.7815C14.9738 12.9293 14.8762 13.0562 14.7364 13.1055L14.6597 13.1324C14.2823 13.2654 13.889 13.3644 13.4838 13.426Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                             </svg>
//                                             <p className="text-xs text-left text-[#666362]">
//                                                 Family crisis
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
//                                         <div className="flex justify-start items-start flex-grow relative gap-4">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[#f4ce9b]" />
//                                             <div className="flex flex-col justify-start items-center flex-grow gap-2">
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="text-sm font-medium text-left text-[#545454]">
//                                                         SilentSage
//                                                     </p>
//                                                     <p className="text-xs text-left text-[#545454]">
//                                                         1d
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex flex-col justify-start items-start self-stretch gap-2">
//                                                     <div className="flex justify-start items-start self-stretch relative gap-2">
//                                                         <p className="flex-grow w-[266px] text-base text-left text-[#101010]">
//                                                             I’m feeling really overwhelmed right now. My parents have always had high
//                                                             expectations for me, and I feel like I can never live up to them. They
//                                                             want me to follow a specific career path and constantly compare me to my
//                                                             older sibling, who is a doctor. I’m passionate about art and want to
//                                                             pursue a career in graphic design, but every time I bring it up, they
//                                                             dismiss it and say it’s not a 'real' profession. It's causing a lot of
//                                                             tension at home, and I’m starting to feel resentful. Has anyone else dealt
//                                                             with something similar? How did you handle it?
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <svg
//                                             width={20}
//                                             height={20}
//                                             viewBox="0 0 20 20"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-5 h-5 relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M10 5.625C9.65482 5.625 9.375 5.34518 9.375 5C9.375 4.65482 9.65482 4.375 10 4.375C10.3452 4.375 10.625 4.65482 10.625 5C10.625 5.34518 10.3452 5.625 10 5.625Z"
//                                                 stroke="#565D60"
//                                                 stroke-width="1.5"
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                             />
//                                             <path
//                                                 d="M10 10.625C9.65482 10.625 9.375 10.3452 9.375 10C9.375 9.65482 9.65482 9.375 10 9.375C10.3452 9.375 10.625 9.65482 10.625 10C10.625 10.3452 10.3452 10.625 10 10.625Z"
//                                                 stroke="#565D60"
//                                                 stroke-width="1.5"
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                             />
//                                             <path
//                                                 d="M10 15.625C9.65482 15.625 9.375 15.3452 9.375 15C9.375 14.6548 9.65482 14.375 10 14.375C10.3452 14.375 10.625 14.6548 10.625 15C10.625 15.3452 10.3452 15.625 10 15.625Z"
//                                                 stroke="#565D60"
//                                                 stroke-width="1.5"
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
//                                     <div className="flex justify-start items-center self-stretch relative space-x-[-1px]">
//                                         <svg
//                                             width={17}
//                                             height={17}
//                                             viewBox="0 0 17 17"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[16.69px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M8.34598 16.692C12.9553 16.692 16.692 12.9554 16.692 8.346C16.692 3.73663 12.9553 0 8.34598 0C3.73662 0 0 3.73663 0 8.346C0 12.9554 3.73662 16.692 8.34598 16.692Z"
//                                                 fill="#FFDD67"
//                                             />
//                                             <path
//                                                 d="M6.53727 7.34481C6.92675 8.15159 6.42599 9.18093 5.45229 9.65387C4.47859 10.099 3.3658 9.82079 2.97632 9.01401C2.75376 8.48543 6.31471 6.81623 6.53727 7.34481ZM10.1539 7.34481C9.76438 8.15159 10.2651 9.18093 11.2388 9.65387C12.2125 10.099 13.3253 9.82079 13.7148 9.01401C13.9374 8.48543 10.3764 6.81623 10.1539 7.34481Z"
//                                                 fill="#664E27"
//                                             />
//                                             <path
//                                                 d="M5.7587 4.95186C5.00756 5.86992 3.19927 6.70452 2.00301 6.70452C1.83609 6.70452 1.80827 7.31656 2.00301 7.31656C3.36619 7.31656 5.3414 6.3985 6.23164 5.34134C6.37074 5.20224 5.86998 4.84058 5.7587 4.95186ZM10.9332 4.95186C11.6844 5.86992 13.4926 6.70452 14.6889 6.70452C14.8558 6.70452 14.8836 7.31656 14.6889 7.31656C13.3257 7.31656 11.3505 6.3985 10.4603 5.34134C10.3212 5.20224 10.8219 4.84058 10.9332 4.95186Z"
//                                                 fill="#917524"
//                                             />
//                                             <path
//                                                 d="M10.738 12.3522C9.23573 11.6567 7.45525 11.6567 5.95297 12.3522C5.59131 12.5191 6.03643 13.5206 6.42591 13.3259C7.42743 12.853 8.90189 12.686 10.2929 13.3259C10.6545 13.4928 11.1275 12.5469 10.738 12.3522Z"
//                                                 fill="#664E27"
//                                             />
//                                         </svg>
//                                         <svg
//                                             width={18}
//                                             height={17}
//                                             viewBox="0 0 18 17"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[16.69px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M9.03788 16.692C13.6472 16.692 17.3839 12.9554 17.3839 8.346C17.3839 3.73663 13.6472 0 9.03788 0C4.42852 0 0.691895 3.73663 0.691895 8.346C0.691895 12.9554 4.42852 16.692 9.03788 16.692Z"
//                                                 fill="#EF5350"
//                                             />
//                                             <path
//                                                 d="M11.5412 13.2703C9.92769 11.9349 8.14721 11.9349 6.53366 13.2703C6.33892 13.4372 6.172 13.159 6.3111 12.9086C6.81186 11.9628 7.78555 11.1003 9.03745 11.1003C10.2893 11.1003 11.2909 11.9628 11.7638 12.9086C11.9029 13.1312 11.736 13.4094 11.5412 13.2703Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M2.97337 6.37061C2.55607 7.67815 3.14029 9.15261 4.44783 9.73683C5.72754 10.3489 7.22982 9.87593 7.98096 8.70749L6.06138 6.56535L2.97337 6.37061Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M4.08403 6.62109C3.69455 7.42787 4.05621 8.40157 4.86299 8.76323C5.66977 9.15271 6.64346 8.79105 7.00512 7.98427C7.28332 7.45569 4.33441 6.09251 4.08403 6.62109Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M2.97119 6.37043C3.41631 6.09223 3.94489 5.95312 4.47347 5.95312C5.00205 5.95312 5.53063 6.09223 6.03139 6.31479C6.50433 6.53735 6.94944 6.87119 7.3111 7.26067C7.64494 7.67797 7.92314 8.15091 7.97878 8.67949C7.61712 8.31783 7.25546 8.0118 6.86598 7.7336C6.47651 7.4554 6.08703 7.23285 5.69755 7.06593C5.28025 6.87119 4.86295 6.73209 4.41783 6.59299C3.91707 6.50953 3.47195 6.42607 2.97119 6.37043Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M15.1028 6.37061C15.5201 7.67815 14.9359 9.15261 13.6283 9.73683C12.3486 10.3489 10.8464 9.87593 10.0952 8.70749L12.0148 6.56535L15.1028 6.37061Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M13.9918 6.62109C14.3813 7.42787 14.0197 8.40157 13.2129 8.76323C12.4061 9.15271 11.4324 8.79105 11.0707 7.98427C10.7925 7.45569 13.7415 6.09251 13.9918 6.62109Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M15.1043 6.37043C14.6592 6.09223 14.1306 5.95312 13.602 5.95312C13.0734 5.95312 12.5448 6.09223 12.0441 6.31479C11.5711 6.53735 11.126 6.87119 10.7644 7.26067C10.4305 7.67797 10.1523 8.15091 10.0967 8.67949C10.4583 8.31783 10.82 8.0118 11.2095 7.7336C11.599 7.4554 11.9884 7.23285 12.3779 7.06593C12.7952 6.87119 13.2125 6.73209 13.6576 6.59299C14.1584 6.50953 14.6035 6.42607 15.1043 6.37043Z"
//                                                 fill="#302424"
//                                             />
//                                         </svg>
//                                     </div>
//                                     <div className="flex justify-start items-center self-stretch gap-6">
//                                         <div className="flex justify-start items-center flex-grow gap-4">
//                                             <div className="flex justify-start items-center relative gap-1 p-0.5">
//                                                 <svg
//                                                     width={20}
//                                                     height={21}
//                                                     viewBox="0 0 20 21"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="w-5 h-5 relative"
//                                                     preserveAspectRatio="none"
//                                                 >
//                                                     <path
//                                                         d="M5.52714 9.23364C6.1991 9.23364 6.8054 8.86211 7.22008 8.33336C7.86438 7.51184 8.67641 6.82814 9.60461 6.33382C10.2064 6.01334 10.7286 5.53721 10.9818 4.90417C11.159 4.46122 11.25 3.98853 11.25 3.51146V2.98364C11.25 2.63846 11.5298 2.35864 11.875 2.35864C12.9105 2.35864 13.75 3.19811 13.75 4.23364C13.75 5.19333 13.5337 6.1025 13.1472 6.91506C12.9259 7.38034 13.2364 7.98364 13.7516 7.98364M13.7516 7.98364H16.3564C17.212 7.98364 17.9778 8.56197 18.0683 9.41269C18.1058 9.76455 18.125 10.1218 18.125 10.4836C18.125 12.8567 17.2984 15.0366 15.9175 16.7513C15.5945 17.1524 15.0952 17.3586 14.5802 17.3586H11.2335C10.8305 17.3586 10.4301 17.2937 10.0477 17.1662L7.45231 16.3011C7.06994 16.1736 6.66952 16.1086 6.26646 16.1086H4.92017M13.7516 7.98364H11.875M4.92017 16.1086C4.98918 16.2791 5.06428 16.4465 5.14519 16.6105C5.30947 16.9434 5.08017 17.3586 4.7089 17.3586H3.95241C3.21181 17.3586 2.52493 16.927 2.3088 16.2186C2.02674 15.2942 1.875 14.3129 1.875 13.2961C1.875 12.0024 2.12067 10.7661 2.56791 9.63124C2.82212 8.98617 3.47278 8.60864 4.16613 8.60864H5.04343C5.4367 8.60864 5.66442 9.0719 5.46025 9.40802C4.77157 10.5418 4.375 11.8727 4.375 13.2961C4.375 14.2907 4.5686 15.2401 4.92017 16.1086Z"
//                                                         stroke="#565D60"
//                                                         stroke-width="1.5"
//                                                         stroke-linecap="round"
//                                                         stroke-linejoin="round"
//                                                     />
//                                                 </svg>
//                                                 <p className="text-xs text-left text-[#545454]">15</p>
//                                             </div>
//                                             <div className="flex justify-end items-center relative gap-1 p-0.5">
//                                                 <svg
//                                                     width={20}
//                                                     height={21}
//                                                     viewBox="0 0 20 21"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="w-5 h-5 relative"
//                                                     preserveAspectRatio="xMidYMid meet"
//                                                 >
//                                                     <path
//                                                         d="M7.1875 10.6919C7.1875 10.8645 7.04759 11.0044 6.875 11.0044C6.70241 11.0044 6.5625 10.8645 6.5625 10.6919C6.5625 10.5193 6.70241 10.3794 6.875 10.3794C7.04759 10.3794 7.1875 10.5193 7.1875 10.6919ZM7.1875 10.6919H6.875M10.3125 10.6919C10.3125 10.8645 10.1726 11.0044 10 11.0044C9.82741 11.0044 9.6875 10.8645 9.6875 10.6919C9.6875 10.5193 9.82741 10.3794 10 10.3794C10.1726 10.3794 10.3125 10.5193 10.3125 10.6919ZM10.3125 10.6919H10M13.4375 10.6919C13.4375 10.8645 13.2976 11.0044 13.125 11.0044C12.9524 11.0044 12.8125 10.8645 12.8125 10.6919C12.8125 10.5193 12.9524 10.3794 13.125 10.3794C13.2976 10.3794 13.4375 10.5193 13.4375 10.6919ZM13.4375 10.6919L13.125 10.6919M17.5 10.6919C17.5 14.4889 14.1421 17.5669 10 17.5669C9.26044 17.5669 8.54588 17.4688 7.87098 17.286C7.05847 17.8568 6.06834 18.1919 5 18.1919C4.83398 18.1919 4.6698 18.1838 4.50806 18.168C4.375 18.155 4.24316 18.1368 4.11316 18.1135C4.5161 17.638 4.80231 17.0608 4.92824 16.4259C5.00378 16.045 4.81725 15.6751 4.53903 15.4043C3.27475 14.1737 2.5 12.5157 2.5 10.6919C2.5 6.89494 5.85786 3.81689 10 3.81689C14.1421 3.81689 17.5 6.89494 17.5 10.6919Z"
//                                                         stroke="#565D60"
//                                                         stroke-width="1.5"
//                                                         stroke-linecap="round"
//                                                         stroke-linejoin="round"
//                                                     />
//                                                 </svg>
//                                                 <p className="text-xs text-left text-[#545454]">
//                                                     1.4k
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
//                                             <svg
//                                                 width={20}
//                                                 height={21}
//                                                 viewBox="0 0 20 21"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="w-5 h-5 relative"
//                                                 preserveAspectRatio="none"
//                                             >
//                                                 <path
//                                                     d="M17.5 10.692L11.6667 4.85864V8.19198C5.83333 9.02531 3.33333 13.192 2.5 17.3586C4.58333 14.442 7.5 13.1086 11.6667 13.1086V16.5253L17.5 10.692Z"
//                                                     fill="#565D60"
//                                                 />
//                                             </svg>
//                                             <p className="text-xs text-left text-[#545454]">1.4k</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <svg
//                             width={390}
//                             height={2}
//                             viewBox="0 0 390 2"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="self-stretch h-0 relative"
//                             preserveAspectRatio="none"
//                         >
//                             <path d="M0 1.19189L390 1.19189" stroke="#F6F6F6" stroke-linecap="round" />
//                         </svg>
//                     </div>
//                     <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-6">
//                             <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                 <div className="flex flex-col justify-start items-center self-stretch gap-2">
//                                     <div className="flex justify-start items-center self-stretch gap-2 px-16">
//                                         <div className="flex justify-start items-center relative gap-2">
//                                             <svg
//                                                 width={16}
//                                                 height={17}
//                                                 viewBox="0 0 16 17"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="w-4 h-4 relative"
//                                                 preserveAspectRatio="xMidYMid meet"
//                                             >
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M5.5 4.69189C5.5 3.31118 6.61929 2.19189 8 2.19189C9.38071 2.19189 10.5 3.31118 10.5 4.69189C10.5 6.07261 9.38071 7.19189 8 7.19189C6.61929 7.19189 5.5 6.07261 5.5 4.69189Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M10.5 6.69189C10.5 5.58733 11.3954 4.69189 12.5 4.69189C13.6046 4.69189 14.5 5.58733 14.5 6.69189C14.5 7.79646 13.6046 8.69189 12.5 8.69189C11.3954 8.69189 10.5 7.79646 10.5 6.69189Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M1.5 6.69189C1.5 5.58733 2.39543 4.69189 3.5 4.69189C4.60457 4.69189 5.5 5.58733 5.5 6.69189C5.5 7.79646 4.60457 8.69189 3.5 8.69189C2.39543 8.69189 1.5 7.79646 1.5 6.69189Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     fill-rule="evenodd"
//                                                     clip-rule="evenodd"
//                                                     d="M4.20657 10.2702C5.00522 9.0215 6.40557 8.19189 8 8.19189C9.59463 8.19189 10.9951 9.02171 11.7937 10.2707C12.3458 11.1342 12.5847 12.1754 12.4726 13.1905C12.4551 13.3492 12.3629 13.4899 12.2245 13.5693C10.9796 14.2836 9.53672 14.6919 8 14.6919C6.46328 14.6919 5.02039 14.2836 3.7755 13.5693C3.63706 13.4899 3.54486 13.3492 3.52736 13.1905C3.41529 12.1752 3.65427 11.1338 4.20657 10.2702Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     d="M3.38819 9.69435C3.38016 9.70668 3.37218 9.71905 3.36425 9.73145C2.72061 10.7378 2.42605 11.9363 2.51648 13.1179C2.11111 13.0563 1.7178 12.9573 1.34029 12.8243L1.26365 12.7974C1.12384 12.7481 1.02615 12.6211 1.01439 12.4734L1.00795 12.3924C1.00268 12.3262 1 12.2593 1 12.1919C1 10.8487 2.05936 9.75284 3.38819 9.69435Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                                 <path
//                                                     d="M13.4838 13.1179C13.5742 11.9366 13.2797 10.7383 12.6363 9.73201C12.6283 9.71943 12.6202 9.70688 12.6121 9.69436C13.9408 9.75297 15 10.8487 15 12.1919C15 12.2593 14.9973 12.3262 14.9921 12.3924L14.9856 12.4734C14.9738 12.6211 14.8762 12.7481 14.7364 12.7974L14.6597 12.8243C14.2823 12.9573 13.889 13.0563 13.4838 13.1179Z"
//                                                     fill="#A1A8AB"
//                                                 />
//                                             </svg>
//                                             <p className="text-xs text-left text-[#666362]">
//                                                 Life style
//                                             </p>
//                                         </div>
//                                         <div className="flex justify-start items-start">
//                                             <div className="flex justify-start items-center w-[97px] rounded-3xl">
//                                                 <div className="flex justify-center items-center relative gap-2">
//                                                     <p className="text-xs text-center text-[#0d479b]">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
//                                         <div className="flex justify-start items-start flex-grow relative gap-4">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-center flex-grow gap-2">
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="text-sm font-medium text-left text-[#545454]">
//                                                         Sakura543
//                                                     </p>
//                                                     <p className="text-xs text-left text-[#545454]">
//                                                         1d
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                                     <div className="flex justify-start items-start self-stretch relative gap-2">
//                                                         <p className="flex-grow w-[266px] text-base text-left text-[#101010]">
//                                                             Does your cultural upbringing influence your big life decisions?
//                                                         </p>
//                                                     </div>
//                                                     <div className="flex flex-col justify-start items-start self-stretch gap-2">
//                                                         <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2 p-2 rounded-xl bg-[#c2d9fa] border-[0.5px] border-[#2d82eb]">
//                                                             <div className="flex flex-col justify-start items-start h-[33px] w-[266px] absolute left-0 top-0 gap-2 pr-20">
//                                                                 <svg
//                                                                     width={186}
//                                                                     height={34}
//                                                                     viewBox="0 0 186 34"
//                                                                     fill="none"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     className="self-stretch flex-grow"
//                                                                     preserveAspectRatio="none"
//                                                                 >
//                                                                     <path d="M0 0.691895H186V33.6919H0V0.691895Z" fill="#2D82EB" />
//                                                                 </svg>
//                                                             </div>
//                                                             <p className="flex-grow w-[214px] text-sm text-left text-white">
//                                                                 Yes, definitely
//                                                             </p>
//                                                             <p className="text-sm text-right text-[#0d479b]">
//                                                                 75%
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2 p-2 rounded-xl bg-[#eaf1fd] border-[0.5px] border-[#c8dcf3]">
//                                                             <div className="flex flex-col justify-start items-start h-[33px] w-[266px] absolute left-0 top-0 gap-2 pr-[220px]">
//                                                                 <svg
//                                                                     width={46}
//                                                                     height={34}
//                                                                     viewBox="0 0 46 34"
//                                                                     fill="none"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     className="self-stretch flex-grow"
//                                                                     preserveAspectRatio="none"
//                                                                 >
//                                                                     <path d="M0 0.691895H46V33.6919H0V0.691895Z" fill="#C8DCF3" />
//                                                                 </svg>
//                                                             </div>
//                                                             <p className="flex-grow w-[222px] text-sm text-left text-[#0d479b]">
//                                                                 No, not at all
//                                                             </p>
//                                                             <p className="text-sm text-right text-[#0d479b]">
//                                                                 5%
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2 p-2 rounded-xl bg-[#eaf1fd] border-[0.5px] border-[#c8dcf3]">
//                                                             <div className="flex flex-col justify-start items-start h-[33px] w-[266px] absolute left-0 top-0 gap-2 pr-[155px]">
//                                                                 <svg
//                                                                     width={111}
//                                                                     height={34}
//                                                                     viewBox="0 0 111 34"
//                                                                     fill="none"
//                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                     className="self-stretch flex-grow"
//                                                                     preserveAspectRatio="none"
//                                                                 >
//                                                                     <path d="M0 0.691895H111V33.6919H0V0.691895Z" fill="#C8DCF3" />
//                                                                 </svg>
//                                                             </div>
//                                                             <p className="flex-grow w-[214px] text-sm text-left text-[#0d479b]">
//                                                                 Not really thought about it
//                                                             </p>
//                                                             <p className="text-sm text-right text-[#0d479b]">
//                                                                 20%
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="flex justify-start items-start relative gap-1">
//                                                         <p className="text-xs text-left text-[#939393]">
//                                                             500 Votes
//                                                         </p>
//                                                         <p className="text-xs text-left text-[#939393]">
//                                                             1 wk left
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <svg
//                                             width={20}
//                                             height={21}
//                                             viewBox="0 0 20 21"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-5 h-5 relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M10 6.31689C9.65482 6.31689 9.375 6.03707 9.375 5.69189C9.375 5.34672 9.65482 5.06689 10 5.06689C10.3452 5.06689 10.625 5.34672 10.625 5.69189C10.625 6.03707 10.3452 6.31689 10 6.31689Z"
//                                                 stroke="#565D60"
//                                                 stroke-width="1.5"
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                             />
//                                             <path
//                                                 d="M10 11.3169C9.65482 11.3169 9.375 11.0371 9.375 10.6919C9.375 10.3467 9.65482 10.0669 10 10.0669C10.3452 10.0669 10.625 10.3467 10.625 10.6919C10.625 11.0371 10.3452 11.3169 10 11.3169Z"
//                                                 stroke="#565D60"
//                                                 stroke-width="1.5"
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                             />
//                                             <path
//                                                 d="M10 16.3169C9.65482 16.3169 9.375 16.0371 9.375 15.6919C9.375 15.3467 9.65482 15.0669 10 15.0669C10.3452 15.0669 10.625 15.3467 10.625 15.6919C10.625 16.0371 10.3452 16.3169 10 16.3169Z"
//                                                 stroke="#565D60"
//                                                 stroke-width="1.5"
//                                                 stroke-linecap="round"
//                                                 stroke-linejoin="round"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
//                                     <div className="flex justify-start items-center self-stretch relative space-x-[-1px]">
//                                         <svg
//                                             width={17}
//                                             height={17}
//                                             viewBox="0 0 17 17"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[16.7px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M8.36396 15.5724C12.6637 15.5724 16.1493 12.0868 16.1493 7.78707C16.1493 3.48733 12.6637 0.00170898 8.36396 0.00170898C4.06423 0.00170898 0.578613 3.48733 0.578613 7.78707C0.578613 12.0868 4.06423 15.5724 8.36396 15.5724Z"
//                                                 fill="#FFDD67"
//                                             />
//                                             <path
//                                                 opacity="0.8"
//                                                 d="M15.5946 6.0523C15.837 5.14748 15.0235 4.14336 13.7775 3.80953C12.5315 3.47569 11.3249 3.93856 11.0825 4.84338C10.8401 5.74819 11.6536 6.75232 12.8996 7.08615C14.1456 7.41998 15.3521 6.95711 15.5946 6.0523Z"
//                                                 fill="#FF717F"
//                                             />
//                                             <path
//                                                 opacity="0.8"
//                                                 d="M3.85877 8.6711C4.91547 7.93132 5.3366 6.70954 4.79938 5.94217C4.26216 5.1748 2.97003 5.15243 1.91333 5.89221C0.856627 6.63198 0.435501 7.85377 0.972718 8.62113C1.50993 9.3885 2.80206 9.41087 3.85877 8.6711Z"
//                                                 fill="#FF717F"
//                                             />
//                                             <path
//                                                 d="M6.89044 4.5061C6.19532 3.31049 5.41678 2.81 4.72166 2.94903C4.02654 3.06024 3.44264 3.81098 3.2202 5.17341C3.1924 5.31244 3.47045 5.50707 3.58167 5.34024C3.94313 4.78415 4.44362 4.5061 4.99971 4.42268C5.55581 4.31146 6.1119 4.42268 6.64019 4.81195C6.77922 4.89537 6.97385 4.61732 6.89044 4.5061ZM12.3124 3.53293C11.6173 2.36512 10.8387 1.83683 10.1436 1.97586C9.44848 2.08708 8.86458 2.86561 8.64214 4.20024C8.61434 4.33927 8.89238 4.5339 9.0036 4.36707C9.36507 3.81098 9.86555 3.53293 10.4216 3.44951C10.9777 3.33829 11.5338 3.44951 12.0621 3.83878C12.1734 3.9222 12.368 3.67195 12.3124 3.53293ZM11.3948 6.8139C9.64311 8.56561 7.41873 8.95487 5.16654 7.89829C4.88849 7.75926 4.72166 8.09292 4.9441 8.34317C5.72264 9.23292 7.11288 9.90024 8.66994 9.62219C10.227 9.34414 11.3114 8.23195 11.7285 7.11975C11.8675 6.86951 11.6173 6.61927 11.3948 6.8139Z"
//                                                 fill="#664E27"
//                                             />
//                                             <path
//                                                 d="M7.0288 12.4587C7.0288 12.4587 7.52929 12.2919 7.33465 11.6246C7.14002 10.9294 5.41612 11.6246 4.55417 11.2909C4.55417 11.2909 5.24929 11.0685 5.02685 10.4846C4.80442 9.95626 2.91369 9.76163 1.05077 11.2075C-0.812154 12.6533 0.383452 15.9899 2.69125 16.407C4.30393 16.685 6.75075 16.6572 7.0566 15.9621C7.30685 15.406 6.52831 15.2114 6.52831 15.2114C6.52831 15.2114 7.50148 15.2114 7.50148 14.4607C7.50148 14.0158 7.14002 14.0158 7.14002 14.0158C7.14002 14.0158 7.94636 13.9046 7.94636 13.1538C7.97416 12.5143 7.0288 12.4587 7.0288 12.4587Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M7.36274 12.486C7.97444 12.0689 7.44615 11.068 6.69542 11.1792C6.05591 11.2904 4.94372 11.2904 4.94372 11.2904C4.94372 11.2904 5.30518 11.1514 5.22177 10.6787C5.13835 10.206 4.47104 9.51088 1.80177 10.5953C0.800802 11.0123 0.161291 11.8465 0.0500722 12.8753C-0.061147 13.9875 0.439339 15.2943 1.24568 15.8782C2.13543 16.5455 4.22079 16.9348 6.22274 16.5455C7.55737 16.2953 7.41834 15.4333 6.86225 15.2943C7.77981 15.1275 7.86322 14.3489 7.41834 14.1265C8.44712 13.7928 8.16907 12.5138 7.36274 12.486ZM6.63981 13.9041C6.11152 13.9597 4.69347 14.0709 4.69347 14.0709C4.69347 14.0709 5.66664 14.2655 6.69542 14.0987C7.61298 13.9597 7.55737 14.8772 6.27835 15.0441C5.66664 15.1275 4.69347 15.1553 4.69347 15.1553C4.69347 15.1553 5.58323 15.2943 6.05591 15.2387C7.27932 15.0719 7.1403 15.9894 6.0003 16.1562C3.97055 16.4343 2.33007 16.1562 1.52373 15.5723C0.38373 14.7382 -0.283585 11.9577 1.9408 10.9289C2.94177 10.4563 4.58225 10.0392 4.8325 10.5953C5.16616 11.4016 3.6647 11.485 3.6647 11.485C3.6647 11.485 4.88811 11.6519 6.63981 11.4572C7.11249 11.4016 7.47395 11.9855 6.89005 12.3192C6.38957 12.625 4.69347 12.7362 4.69347 12.7362C4.69347 12.7362 5.61103 12.7641 6.89005 12.6528C7.91883 12.5694 8.00225 13.7372 6.63981 13.9041Z"
//                                                 fill="#CCCFD4"
//                                             />
//                                             <path
//                                                 d="M9.69892 12.4587C9.69892 12.4587 9.19844 12.2919 9.39307 11.6246C9.5877 10.9294 11.3116 11.6246 12.1735 11.2909C12.1735 11.2909 11.4784 11.0685 11.7009 10.4846C11.9233 9.95626 13.814 9.76163 15.677 11.2075C17.5399 12.6533 16.3165 15.9899 14.0365 16.3792C12.4238 16.6572 9.97697 16.6294 9.67112 15.9343C9.42087 15.3782 10.1994 15.1836 10.1994 15.1836C10.1994 15.1836 9.22624 15.1836 9.22624 14.4328C9.22624 13.988 9.5877 13.988 9.5877 13.988C9.5877 13.988 8.78136 13.8767 8.78136 13.126C8.75356 12.5143 9.69892 12.4587 9.69892 12.4587Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M9.31002 14.0987C8.89295 14.3211 8.97637 15.0996 9.86612 15.2665C9.31002 15.4055 9.171 16.2674 10.5056 16.5177C12.5354 16.9069 14.5929 16.5455 15.4827 15.8504C16.2612 15.2665 16.7895 13.9596 16.6783 12.8474C16.5671 11.8187 15.9276 10.9845 14.9266 10.5674C12.2295 9.48305 11.59 10.1504 11.5066 10.6509C11.4232 11.1235 11.7847 11.2626 11.7847 11.2626C11.7847 11.2626 10.6725 11.2626 10.0329 11.1513C9.28222 11.0123 8.75393 12.0411 9.36563 12.4582C8.55929 12.5138 8.28125 13.7928 9.31002 14.0987ZM9.83831 12.6528C11.1173 12.764 12.0349 12.7362 12.0349 12.7362C12.0349 12.7362 10.3388 12.625 9.83831 12.3191C9.25441 11.9855 9.61588 11.4016 10.0886 11.4572C11.8681 11.6796 13.0637 11.485 13.0637 11.485C13.0637 11.485 11.5622 11.3738 11.8959 10.5952C12.1461 10.0391 13.7866 10.4562 14.7876 10.9289C17.012 11.9855 16.3168 14.7382 15.2046 15.5723C14.4261 16.1562 12.7578 16.4621 10.7281 16.1562C9.56027 15.9894 9.42124 15.0718 10.6725 15.2387C11.1451 15.2943 12.0349 15.1552 12.0349 15.1552C12.0349 15.1552 11.0617 15.1274 10.45 15.044C9.171 14.8772 9.11539 13.9596 10.0329 14.0987C11.0339 14.2377 12.0349 14.0709 12.0349 14.0709C12.0349 14.0709 10.6168 13.9874 10.0886 13.904C8.72612 13.7372 8.80954 12.5694 9.83831 12.6528Z"
//                                                 fill="#CCCFD4"
//                                             />
//                                         </svg>
//                                         <svg
//                                             width={18}
//                                             height={21}
//                                             viewBox="0 0 18 21"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[19.32px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M17.0869 8.48367C17.0869 8.48367 16.121 9.3852 14.479 10.4477C14.0282 7.83972 12.7725 4.61998 10.3255 0.691895C10.3255 0.691895 9.52057 4.90976 6.84819 8.87004C5.68908 7.06698 5.17392 5.6503 5.17392 5.6503C-3.19739 14.0538 3.75724 20.0103 8.13608 20.0103C13.7384 20.0103 18.6646 17.3058 17.0869 8.48367Z"
//                                                 fill="#FF9D33"
//                                             />
//                                             <path
//                                                 d="M13.7706 15.9534C14.2536 14.8909 14.6078 13.5064 14.6722 11.7678C14.6722 11.7678 13.996 12.3473 12.8369 13.0879C12.5149 11.3492 11.6456 9.22417 9.93915 6.58398C9.93915 6.58398 9.39179 9.38516 7.52435 12.0575C6.71941 10.8662 6.36524 9.90032 6.36524 9.90032C4.98076 12.0897 4.4334 13.8284 4.4012 15.2129C3.62847 14.9231 3.14551 14.6977 3.14551 14.6977C4.4656 18.6258 7.20238 19.4952 8.42587 19.4952C10.6153 19.4952 12.8369 18.8512 15.0263 15.7281C15.0263 15.6959 14.5434 15.8246 13.7706 15.9534Z"
//                                                 fill="#FFCE31"
//                                             />
//                                             <path
//                                                 d="M5.78475 14.1826C5.78475 14.1826 6.68628 15.4061 7.36242 15.1163C7.36242 15.1163 8.65032 13.0878 10.5178 11.9609C10.5178 11.9609 10.1314 15.0519 10.5822 15.5992C11.1617 16.3398 12.7394 14.7943 12.7394 14.7943C12.7394 16.6296 10.7431 18.9156 8.94009 18.9156C7.20143 18.9156 4.69004 16.9193 5.78475 14.1826Z"
//                                                 fill="#FFDF85"
//                                             />
//                                             <path
//                                                 d="M14.7687 5.87592C15.4449 4.91 15.8956 3.87968 15.8956 3.87968C17.0226 5.74713 16.3464 6.87404 15.8635 7.22821C15.1873 7.74337 13.996 7.00283 14.7687 5.87592ZM2.46935 5.55394C1.79321 4.42704 1.72881 3.01035 1.72881 3.01035C0.118944 5.42515 0.730693 6.77745 1.27805 7.16382C1.98639 7.71117 3.20989 6.87404 2.46935 5.55394ZM6.20424 3.04255C6.30084 2.26981 5.97886 1.49707 5.97886 1.49707C7.49214 2.49519 7.49214 3.33232 7.29895 3.68649C7.00918 4.10506 6.10765 3.91188 6.20424 3.04255Z"
//                                                 fill="#FF9D33"
//                                             />
//                                         </svg>
//                                         <svg
//                                             width={18}
//                                             height={17}
//                                             viewBox="0 0 18 17"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[16.69px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M8.73124 0.00512695C4.11313 0.00512695 0.385254 3.73301 0.385254 8.35113C0.385254 12.9692 4.11313 16.6971 8.73124 16.6971C13.3494 16.6971 17.0772 12.9692 17.0772 8.35113C17.0772 3.73301 13.3494 0.00512695 8.73124 0.00512695ZM8.73124 13.3587C8.34176 12.858 3.02815 9.76995 4.11313 6.34809C5.08683 3.26007 8.31394 4.51197 8.73124 6.18117C9.03726 4.62325 12.32 3.20443 13.3493 6.34809C14.4343 9.71431 9.12072 12.9692 8.73124 13.3587Z"
//                                                 fill="#FF5A79"
//                                             />
//                                         </svg>
//                                         <svg
//                                             width={17}
//                                             height={17}
//                                             viewBox="0 0 17 17"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[16.69px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M8.42313 16.6971C13.0325 16.6971 16.7691 12.9605 16.7691 8.35113C16.7691 3.74176 13.0325 0.00512695 8.42313 0.00512695C3.81377 0.00512695 0.0771484 3.74176 0.0771484 8.35113C0.0771484 12.9605 3.81377 16.6971 8.42313 16.6971Z"
//                                                 fill="#FFDD67"
//                                             />
//                                             <path
//                                                 d="M6.61442 7.34993C7.0039 8.15671 6.50314 9.18605 5.52944 9.65899C4.55574 10.1041 3.44294 9.82592 3.05347 9.01914C2.83091 8.49056 6.39186 6.82135 6.61442 7.34993ZM10.231 7.34993C9.84153 8.15671 10.3423 9.18605 11.316 9.65899C12.2897 10.1041 13.4025 9.82592 13.792 9.01914C14.0145 8.49056 10.4536 6.82135 10.231 7.34993Z"
//                                                 fill="#664E27"
//                                             />
//                                             <path
//                                                 d="M5.83585 4.95698C5.08471 5.87504 3.27642 6.70964 2.08016 6.70964C1.91324 6.70964 1.88542 7.32168 2.08016 7.32168C3.44334 7.32168 5.41855 6.40362 6.30879 5.34646C6.44789 5.20736 5.94713 4.8457 5.83585 4.95698ZM11.0104 4.95698C11.7615 5.87504 13.5698 6.70964 14.7661 6.70964C14.933 6.70964 14.9608 7.32168 14.7661 7.32168C13.4029 7.32168 11.4277 6.40362 10.5374 5.34646C10.3983 5.20736 10.8991 4.8457 11.0104 4.95698Z"
//                                                 fill="#917524"
//                                             />
//                                             <path
//                                                 d="M10.8152 12.3573C9.31288 11.6618 7.5324 11.6618 6.03012 12.3573C5.66846 12.5242 6.11358 13.5258 6.50306 13.331C7.50458 12.8581 8.97904 12.6912 10.37 13.331C10.7317 13.4979 11.2046 12.5521 10.8152 12.3573Z"
//                                                 fill="#664E27"
//                                             />
//                                         </svg>
//                                         <svg
//                                             width={18}
//                                             height={17}
//                                             viewBox="0 0 18 17"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="w-[16.69px] h-[16.69px] relative"
//                                             preserveAspectRatio="xMidYMid meet"
//                                         >
//                                             <path
//                                                 d="M9.11503 16.6971C13.7244 16.6971 17.461 12.9605 17.461 8.35113C17.461 3.74176 13.7244 0.00512695 9.11503 0.00512695C4.50567 0.00512695 0.769043 3.74176 0.769043 8.35113C0.769043 12.9605 4.50567 16.6971 9.11503 16.6971Z"
//                                                 fill="#EF5350"
//                                             />
//                                             <path
//                                                 d="M11.6184 13.2754C10.0048 11.9401 8.22436 11.9401 6.6108 13.2754C6.41607 13.4423 6.24915 13.1641 6.38825 12.9138C6.889 11.9679 7.8627 11.1055 9.1146 11.1055C10.3665 11.1055 11.368 11.9679 11.841 12.9138C11.9801 13.1363 11.8131 13.4145 11.6184 13.2754Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M3.05052 6.37573C2.63322 7.68327 3.21744 9.15773 4.52498 9.74195C5.80469 10.354 7.30697 9.88105 8.05811 8.71261L6.13853 6.57047L3.05052 6.37573Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M4.16118 6.62622C3.7717 7.433 4.13336 8.4067 4.94014 8.76836C5.74691 9.15784 6.72061 8.79618 7.08227 7.9894C7.36047 7.46082 4.41156 6.09764 4.16118 6.62622Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M3.04834 6.37555C3.49346 6.09735 4.02204 5.95825 4.55062 5.95825C5.0792 5.95825 5.60778 6.09735 6.10853 6.31991C6.58147 6.54247 7.02659 6.87631 7.38825 7.26579C7.72209 7.68309 8.00029 8.15603 8.05593 8.68461C7.69427 8.32295 7.33261 8.01693 6.94313 7.73873C6.55365 7.46053 6.16417 7.23797 5.77469 7.07105C5.3574 6.87631 4.9401 6.73721 4.49498 6.59811C3.99422 6.51465 3.5491 6.43119 3.04834 6.37555Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M15.18 6.37573C15.5973 7.68327 15.013 9.15773 13.7055 9.74195C12.4258 10.354 10.9235 9.88105 10.1724 8.71261L12.0919 6.57047L15.18 6.37573Z"
//                                                 fill="white"
//                                             />
//                                             <path
//                                                 d="M14.069 6.62622C14.4585 7.433 14.0968 8.4067 13.29 8.76836C12.4832 9.15784 11.5095 8.79618 11.1479 7.9894C10.8697 7.46082 13.8186 6.09764 14.069 6.62622Z"
//                                                 fill="#302424"
//                                             />
//                                             <path
//                                                 d="M15.1814 6.37555C14.7363 6.09735 14.2077 5.95825 13.6791 5.95825C13.1506 5.95825 12.622 6.09735 12.1212 6.31991C11.6483 6.54247 11.2032 6.87631 10.8415 7.26579C10.5077 7.68309 10.2295 8.15603 10.1738 8.68461C10.5355 8.32295 10.8971 8.01693 11.2866 7.73873C11.6761 7.46053 12.0656 7.23797 12.4551 7.07105C12.8724 6.87631 13.2897 6.73721 13.7348 6.59811C14.2355 6.51465 14.6807 6.43119 15.1814 6.37555Z"
//                                                 fill="#302424"
//                                             />
//                                         </svg>
//                                     </div>
//                                     <div className="flex justify-start items-center self-stretch gap-6">
//                                         <div className="flex justify-start items-center flex-grow gap-4">
//                                             <div className="flex justify-start items-center relative gap-1 p-0.5">
//                                                 <svg
//                                                     width={20}
//                                                     height={21}
//                                                     viewBox="0 0 20 21"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="w-5 h-5 relative"
//                                                     preserveAspectRatio="none"
//                                                 >
//                                                     <g clip-path="url(#clip0_197_1479)">
//                                                         <path
//                                                             d="M5.52714 8.552C6.1991 8.552 6.8054 8.18047 7.22008 7.65172C7.86438 6.8302 8.67641 6.1465 9.60461 5.65218C10.2064 5.33169 10.7286 4.85557 10.9818 4.22253C11.159 3.77958 11.25 3.30689 11.25 2.82982V2.302C11.25 1.95682 11.5298 1.677 11.875 1.677C12.9105 1.677 13.75 2.51647 13.75 3.552C13.75 4.51169 13.5337 5.42086 13.1472 6.23342C12.9259 6.6987 13.2364 7.302 13.7516 7.302M13.7516 7.302H16.3564C17.212 7.302 17.9778 7.88033 18.0683 8.73105C18.1058 9.0829 18.125 9.44021 18.125 9.802C18.125 12.175 17.2984 14.355 15.9175 16.0697C15.5945 16.4708 15.0952 16.677 14.5802 16.677H11.2335C10.8305 16.677 10.4301 16.612 10.0477 16.4846L7.45231 15.6194C7.06994 15.492 6.66952 15.427 6.26646 15.427H4.92017M13.7516 7.302H11.875M4.92017 15.427C4.98918 15.5975 5.06428 15.7649 5.14519 15.9288C5.30947 16.2618 5.08017 16.677 4.7089 16.677H3.95241C3.21181 16.677 2.52493 16.2453 2.3088 15.537C2.02674 14.6125 1.875 13.6312 1.875 12.6145C1.875 11.3208 2.12067 10.0844 2.56791 8.9496C2.82212 8.30453 3.47278 7.927 4.16613 7.927H5.04343C5.4367 7.927 5.66442 8.39026 5.46025 8.72638C4.77157 9.86016 4.375 11.191 4.375 12.6145C4.375 13.6091 4.5686 14.5585 4.92017 15.427Z"
//                                                             stroke="#565D60"
//                                                             stroke-width="1.5"
//                                                             stroke-linecap="round"
//                                                             stroke-linejoin="round"
//                                                         />
//                                                     </g>
//                                                     <defs>
//                                                         <clippath id="clip0_197_1479">
//                                                             <rect
//                                                                 width={20}
//                                                                 height={20}
//                                                                 fill="white"
//                                                                 transform="translate(0 0.0102539)"
//                                                             />
//                                                         </clippath>
//                                                     </defs>
//                                                 </svg>
//                                                 <p className="text-xs text-left text-[#545454]">1</p>
//                                             </div>
//                                             <div className="flex justify-end items-center relative gap-1 p-0.5">
//                                                 <svg
//                                                     width={20}
//                                                     height={21}
//                                                     viewBox="0 0 20 21"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                     className="w-5 h-5 relative"
//                                                     preserveAspectRatio="xMidYMid meet"
//                                                 >
//                                                     <path
//                                                         d="M7.1875 10.0103C7.1875 10.1828 7.04759 10.3228 6.875 10.3228C6.70241 10.3228 6.5625 10.1828 6.5625 10.0103C6.5625 9.83766 6.70241 9.69775 6.875 9.69775C7.04759 9.69775 7.1875 9.83766 7.1875 10.0103ZM7.1875 10.0103H6.875M10.3125 10.0103C10.3125 10.1828 10.1726 10.3228 10 10.3228C9.82741 10.3228 9.6875 10.1828 9.6875 10.0103C9.6875 9.83766 9.82741 9.69775 10 9.69775C10.1726 9.69775 10.3125 9.83766 10.3125 10.0103ZM10.3125 10.0103H10M13.4375 10.0103C13.4375 10.1828 13.2976 10.3228 13.125 10.3228C12.9524 10.3228 12.8125 10.1828 12.8125 10.0103C12.8125 9.83766 12.9524 9.69775 13.125 9.69775C13.2976 9.69775 13.4375 9.83766 13.4375 10.0103ZM13.4375 10.0103L13.125 10.0103M17.5 10.0103C17.5 13.8072 14.1421 16.8853 10 16.8853C9.26044 16.8853 8.54588 16.7871 7.87098 16.6043C7.05847 17.1752 6.06834 17.5103 5 17.5103C4.83398 17.5103 4.6698 17.5022 4.50806 17.4864C4.375 17.4734 4.24316 17.4552 4.11316 17.4319C4.5161 16.9563 4.80231 16.3791 4.92824 15.7442C5.00378 15.3634 4.81725 14.9935 4.53903 14.7227C3.27475 13.4921 2.5 11.8341 2.5 10.0103C2.5 6.2133 5.85786 3.13525 10 3.13525C14.1421 3.13525 17.5 6.2133 17.5 10.0103Z"
//                                                         stroke="#565D60"
//                                                         stroke-width="1.5"
//                                                         stroke-linecap="round"
//                                                         stroke-linejoin="round"
//                                                     />
//                                                 </svg>
//                                                 <p className="text-xs text-left text-[#545454]">
//                                                     1.4k
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
//                                             <svg
//                                                 width={20}
//                                                 height={21}
//                                                 viewBox="0 0 20 21"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 className="w-5 h-5 relative"
//                                                 preserveAspectRatio="none"
//                                             >
//                                                 <path
//                                                     d="M17.5 10.0103L11.6667 4.177V7.51034C5.83333 8.34367 3.33333 12.5103 2.5 16.677C4.58333 13.7603 7.5 12.427 11.6667 12.427V15.8437L17.5 10.0103Z"
//                                                     fill="#565D60"
//                                                 />
//                                             </svg>
//                                             <p className="text-xs text-left text-[#545454]">1.4k</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <svg
//                             width={390}
//                             height={2}
//                             viewBox="0 0 390 2"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="self-stretch h-0 relative"
//                             preserveAspectRatio="none"
//                         >
//                             <path d="M0 0.510254L390 0.510254" stroke="#F6F6F6" stroke-linecap="round" />
//                         </svg>
//                     </div>
//                     <div className="flex flex-col justify-start items-start w-[390px] relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-4 px-4">
//                             <div className="flex justify-center items-center self-stretch relative gap-2">
//                                 <p className="flex-grow w-[294px] text-xs text-left text-[#666362]">
//                                     You might be interested in
//                                 </p>
//                                 <div className="flex justify-center items-center relative gap-4">
//                                     <svg
//                                         width={20}
//                                         height={21}
//                                         viewBox="0 0 20 21"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-5 h-5 relative"
//                                         preserveAspectRatio="none"
//                                     >
//                                         <path
//                                             d="M11.25 3.7605L17.5 10.0105M17.5 10.0105L11.25 16.2605M17.5 10.0105H2.5"
//                                             stroke="#565D60"
//                                             stroke-width="1.5"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                         />
//                                     </svg>
//                                     <svg
//                                         width={20}
//                                         height={21}
//                                         viewBox="0 0 20 21"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-5 h-5 relative"
//                                         preserveAspectRatio="xMidYMid meet"
//                                     >
//                                         <path
//                                             d="M10 5.6355C9.65482 5.6355 9.375 5.35568 9.375 5.0105C9.375 4.66532 9.65482 4.3855 10 4.3855C10.3452 4.3855 10.625 4.66532 10.625 5.0105C10.625 5.35568 10.3452 5.6355 10 5.6355Z"
//                                             stroke="#565D60"
//                                             stroke-width="1.5"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                         />
//                                         <path
//                                             d="M10 10.6355C9.65482 10.6355 9.375 10.3557 9.375 10.0105C9.375 9.66532 9.65482 9.3855 10 9.3855C10.3452 9.3855 10.625 9.66532 10.625 10.0105C10.625 10.3557 10.3452 10.6355 10 10.6355Z"
//                                             stroke="#565D60"
//                                             stroke-width="1.5"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                         />
//                                         <path
//                                             d="M10 15.6355C9.65482 15.6355 9.375 15.3557 9.375 15.0105C9.375 14.6653 9.65482 14.3855 10 14.3855C10.3452 14.3855 10.625 14.6653 10.625 15.0105C10.625 15.3557 10.3452 15.6355 10 15.6355Z"
//                                             stroke="#565D60"
//                                             stroke-width="1.5"
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                             <div className="flex justify-start items-start self-stretch gap-2">
//                                 <div className="flex flex-col justify-start items-end self-stretch w-[329px] gap-2 p-4 rounded-xl bg-white border-[0.5px] border-[#d3dadd]">
//                                     <div className="flex justify-start items-start self-stretch gap-6">
//                                         <div className="flex justify-start items-start flex-grow relative gap-2">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar-2.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
//                                                 <p className="self-stretch w-[136px] text-sm text-left text-[#101010]">
//                                                     Mental Health
//                                                 </p>
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="flex-grow w-[136px] text-xs text-left text-[#545454]">
//                                                         250 Members
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-start items-start w-[97px]">
//                                             <div className="flex justify-center items-center flex-grow h-8 px-2 rounded-3xl bg-[#0d479b]">
//                                                 <div className="flex justify-center items-center relative gap-2 px-2">
//                                                     <p className="text-xs font-semibold text-center text-white">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-end self-stretch relative gap-2">
//                                         <p className="flex-grow w-[297px] text-xs text-left text-[#545454]">
//                                             Support and advice for mental health issues and coping strategies.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-end self-stretch w-[329px] gap-2 p-4 rounded-xl bg-white border-[0.5px] border-[#d3dadd]">
//                                     <div className="flex justify-start items-start self-stretch gap-6">
//                                         <div className="flex justify-start items-start flex-grow relative gap-2">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar-3.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
//                                                 <p className="self-stretch w-[136px] text-sm text-left text-[#101010]">
//                                                     Workplace Issues
//                                                 </p>
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="flex-grow w-[136px] text-xs text-left text-[#545454]">
//                                                         250 Members
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-start items-start w-[97px]">
//                                             <div className="flex justify-center items-center flex-grow h-8 px-2 rounded-3xl bg-[#0d479b]">
//                                                 <div className="flex justify-center items-center relative gap-2 px-2">
//                                                     <p className="text-xs font-semibold text-center text-white">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-end self-stretch relative gap-2">
//                                         <p className="flex-grow w-[297px] text-xs text-left text-[#545454]">
//                                             Discuss challenges and experiences at work.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-end self-stretch w-[329px] gap-2 p-4 rounded-xl border-[0.5px] border-[#d3dadd]">
//                                     <div className="flex justify-start items-start self-stretch gap-6">
//                                         <div className="flex justify-start items-start flex-grow relative gap-2">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar-4.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
//                                                 <p className="self-stretch w-[136px] text-sm text-left text-[#101010]">
//                                                     Finances
//                                                 </p>
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="flex-grow w-[136px] text-xs text-left text-[#545454]">
//                                                         50 Members
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-start items-start w-[97px]">
//                                             <div className="flex justify-center items-center flex-grow h-8 px-2 rounded-3xl bg-[#0d479b]">
//                                                 <div className="flex justify-center items-center relative gap-2 px-2">
//                                                     <p className="text-xs font-semibold text-center text-white">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-end self-stretch relative gap-2">
//                                         <p className="flex-grow w-[297px] text-xs text-left text-[#545454]">
//                                             Tips for managing a budget and saving money.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch h-0 relative" />
//                     </div>
//                     <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-6">
//                             <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                 <div className="flex flex-col justify-start items-center self-stretch gap-2">
//                                     <div className="flex justify-start items-center self-stretch gap-4 px-16">
//                                         <div className="flex justify-start items-center relative gap-2">
//                                             <div className="w-4 h-4 relative" />
//                                             <p className="text-xs text-left text-[#666362]">
//                                                 Fantasy football
//                                             </p>
//                                         </div>
//                                         <div className="flex justify-start items-start">
//                                             <div className="flex justify-start items-center w-[97px] rounded-3xl">
//                                                 <div className="flex justify-center items-center relative gap-2">
//                                                     <p className="text-xs text-center text-[#0d479b]">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
//                                         <div className="flex justify-start items-start flex-grow relative gap-4">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[#f3aba7]" />
//                                             <div className="flex flex-col justify-start items-center flex-grow gap-2">
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="text-sm font-medium text-left text-[#545454]">
//                                                         Squibsquabbles
//                                                     </p>
//                                                     <p className="text-xs text-left text-[#545454]">
//                                                         1d
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex flex-col justify-start items-start self-stretch gap-2">
//                                                     <div className="flex justify-start items-start self-stretch relative gap-2">
//                                                         <p className="flex-grow w-[266px] text-base text-left text-[#101010]">
//                                                             Looking at the stats, it’s clear we were outplayed in possession and shots
//                                                             on target. Our passing accuracy was also below par. The coach really needs
//                                                             to address these issues in training
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="w-5 h-5 relative" />
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
//                                     <div className="flex justify-start items-center self-stretch gap-6">
//                                         <div className="flex justify-start items-center flex-grow gap-4">
//                                             <div className="flex justify-start items-center relative gap-1 p-0.5">
//                                                 <div className="w-5 h-5 relative" />
//                                                 <p className="text-xs text-left text-[#545454]">1</p>
//                                             </div>
//                                             <div className="flex justify-end items-center relative gap-1 p-0.5">
//                                                 <div className="w-5 h-5 relative" />
//                                                 <p className="text-xs text-left text-[#545454]">
//                                                     1.4k
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
//                                             <div className="w-5 h-5 relative" />
//                                             <p className="text-xs text-left text-[#545454]">1.4k</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch h-0 relative" />
//                     </div>
//                     <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-6">
//                             <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                 <div className="flex flex-col justify-start items-center self-stretch gap-2">
//                                     <div className="flex justify-start items-center self-stretch gap-2 px-16">
//                                         <div className="flex justify-start items-center relative gap-2">
//                                             <div className="w-4 h-4 relative" />
//                                             <p className="text-xs text-left text-[#666362]">
//                                                 Family crisis
//                                             </p>
//                                         </div>
//                                         <div className="flex justify-start items-start">
//                                             <div className="flex justify-start items-center w-[97px] rounded-3xl">
//                                                 <div className="flex justify-center items-center relative gap-2">
//                                                     <p className="text-xs text-center text-[#0d479b]">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
//                                         <div className="flex justify-start items-start flex-grow relative gap-4">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[#9bd4f4]" />
//                                             <div className="flex flex-col justify-start items-center flex-grow gap-2">
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="text-sm font-medium text-left text-[#545454]">
//                                                         HarmonyHunter
//                                                     </p>
//                                                     <p className="text-xs text-left text-[#545454]">
//                                                         1d
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                                     <div className="flex justify-start items-start self-stretch relative gap-2">
//                                                         <p className="flex-grow w-[266px] text-base text-left text-[#101010]">
//                                                             Should Family Therapy Be More Common?
//                                                         </p>
//                                                     </div>
//                                                     <div className="flex flex-col justify-start items-start self-stretch gap-2">
//                                                         <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2 p-2 rounded-xl border-[0.5px] border-[#d3dadd]">
//                                                             <p className="flex-grow w-[250px] text-sm text-left text-[#101010]">
//                                                                 Yes, definitely
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2 p-2 rounded-xl border-[0.5px] border-[#d3dadd]">
//                                                             <p className="flex-grow w-[250px] text-sm text-left text-[#101010]">
//                                                                 Maybe, depending on the situation.
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex justify-start items-center self-stretch relative overflow-hidden gap-2 p-2 rounded-xl border-[0.5px] border-[#d3dadd]">
//                                                             <p className="flex-grow w-[250px] text-sm text-left text-[#101010]">
//                                                                 No, it's not necessary
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                     <div className="flex justify-start items-start relative gap-1">
//                                                         <p className="text-xs text-left text-[#939393]">
//                                                             500 Votes
//                                                         </p>
//                                                         <p className="text-xs text-left text-[#939393]">
//                                                             1 wk left
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="w-5 h-5 relative" />
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
//                                     <div className="flex justify-start items-center self-stretch gap-6">
//                                         <div className="flex justify-start items-center flex-grow gap-4">
//                                             <div className="flex justify-start items-center relative gap-1 p-0.5">
//                                                 <div className="w-5 h-5 relative" />
//                                                 <p className="text-xs text-left text-[#545454]">0</p>
//                                             </div>
//                                             <div className="flex justify-end items-center relative gap-1 p-0.5">
//                                                 <div className="w-5 h-5 relative" />
//                                                 <p className="text-xs text-left text-[#545454]">
//                                                     1.4k
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
//                                             <div className="w-5 h-5 relative" />
//                                             <p className="text-xs text-left text-[#545454]">1.4k</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch h-0 relative" />
//                     </div>
//                     <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-6">
//                             <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                 <div className="flex flex-col justify-start items-center self-stretch gap-2">
//                                     <div className="flex justify-start items-center self-stretch gap-4 px-16">
//                                         <div className="flex justify-start items-center relative gap-2">
//                                             <div className="w-4 h-4 relative" />
//                                             <p className="text-xs text-left text-[#666362]">
//                                                 Tech News
//                                             </p>
//                                         </div>
//                                         <div className="flex justify-start items-start">
//                                             <div className="flex justify-start items-center w-[97px] rounded-3xl">
//                                                 <div className="flex justify-center items-center relative gap-2">
//                                                     <p className="text-xs text-center text-[#0d479b]">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
//                                         <div className="flex justify-start items-start flex-grow relative gap-4">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[#f3aba7]" />
//                                             <div className="flex flex-col justify-start items-center flex-grow gap-2">
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="text-sm font-medium text-left text-[#545454]">
//                                                         RoninRogue
//                                                     </p>
//                                                     <p className="text-xs text-left text-[#545454]">
//                                                         1d
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex flex-col justify-start items-start self-stretch gap-2">
//                                                     <div className="flex justify-start items-start self-stretch relative gap-2">
//                                                         <p className="flex-grow w-[266px] text-base text-left text-[#101010]">
//                                                             What do you all think about these developments? Are you excited or
//                                                             concerned about the direction AI is heading?
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="w-5 h-5 relative" />
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
//                                     <div className="flex justify-start items-center self-stretch gap-6">
//                                         <div className="flex justify-start items-center flex-grow gap-4">
//                                             <div className="flex justify-start items-center relative gap-1 p-0.5">
//                                                 <div className="w-5 h-5 relative" />
//                                                 <p className="text-xs text-left text-[#545454]">1</p>
//                                             </div>
//                                             <div className="flex justify-end items-center relative gap-1 p-0.5">
//                                                 <div className="w-5 h-5 relative" />
//                                                 <p className="text-xs text-left text-[#545454]">
//                                                     1.4k
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
//                                             <div className="w-5 h-5 relative" />
//                                             <p className="text-xs text-left text-[#545454]">1.4k</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch h-0 relative" />
//                     </div>
//                     <div className="flex flex-col justify-start items-start w-[390px] relative gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-4 px-4">
//                             <div className="flex justify-center items-center self-stretch relative gap-2">
//                                 <p className="flex-grow w-[294px] text-xs text-left text-[#666362]">
//                                     Trending groups to join
//                                 </p>
//                                 <div className="flex justify-center items-center relative gap-4">
//                                     <div className="w-5 h-5 relative" />
//                                     <div className="w-5 h-5 relative" />
//                                 </div>
//                             </div>
//                             <div className="flex justify-start items-start self-stretch gap-2">
//                                 <div className="flex flex-col justify-start items-end self-stretch w-[329px] gap-2 p-4 rounded-xl bg-white border-[0.5px] border-[#d3dadd]">
//                                     <div className="flex justify-start items-start self-stretch gap-6">
//                                         <div className="flex justify-start items-start flex-grow relative gap-2">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar-5.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
//                                                 <p className="self-stretch w-[136px] text-sm text-left text-[#101010]">
//                                                     Fantasy football
//                                                 </p>
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="flex-grow w-[136px] text-xs text-left text-[#545454]">
//                                                         250 Members
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-start items-start w-[97px]">
//                                             <div className="flex justify-center items-center flex-grow h-8 px-2 rounded-3xl bg-[#0d479b]">
//                                                 <div className="flex justify-center items-center relative gap-2 px-2">
//                                                     <p className="text-xs font-semibold text-center text-white">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-end self-stretch relative gap-2">
//                                         <p className="flex-grow w-[297px] text-xs text-left text-[#545454]">
//                                             Tips, strategies, and discussions about fantasy football leagues.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-end self-stretch w-[329px] gap-2 p-4 rounded-xl bg-white border-[0.5px] border-[#d3dadd]">
//                                     <div className="flex justify-start items-start self-stretch gap-6">
//                                         <div className="flex justify-start items-start flex-grow relative gap-2">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar-6.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
//                                                 <p className="self-stretch w-[136px] text-sm text-left text-[#101010]">
//                                                     Cybersecurity Tips
//                                                 </p>
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="flex-grow w-[136px] text-xs text-left text-[#545454]">
//                                                         350 Members
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-start items-start w-[97px]">
//                                             <div className="flex justify-center items-center flex-grow h-8 px-2 rounded-3xl bg-[#0d479b]">
//                                                 <div className="flex justify-center items-center relative gap-2 px-2">
//                                                     <p className="text-xs font-semibold text-center text-white">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-end self-stretch relative gap-2">
//                                         <p className="flex-grow w-[297px] text-xs text-left text-[#545454]">
//                                             Discuss online security and data protection strategies.
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col justify-start items-end self-stretch w-[329px] gap-2 p-4 rounded-xl bg-white border-[0.5px] border-[#d3dadd]">
//                                     <div className="flex justify-start items-start self-stretch gap-6">
//                                         <div className="flex justify-start items-start flex-grow relative gap-2">
//                                             <div className="w-8 h-8 relative rounded-[32px] bg-[url('avatar-7.png')] bg-cover bg-no-repeat bg-center" />
//                                             <div className="flex flex-col justify-start items-start flex-grow relative gap-2">
//                                                 <p className="self-stretch w-[136px] text-sm text-left text-[#101010]">
//                                                     Dating Advice
//                                                 </p>
//                                                 <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                     <p className="flex-grow w-[136px] text-xs text-left text-[#545454]">
//                                                         90 Members
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="flex justify-start items-start w-[97px]">
//                                             <div className="flex justify-center items-center flex-grow h-8 px-2 rounded-3xl bg-[#0d479b]">
//                                                 <div className="flex justify-center items-center relative gap-2 px-2">
//                                                     <p className="text-xs font-semibold text-center text-white">
//                                                         Join
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-start items-end self-stretch relative gap-2">
//                                         <p className="flex-grow w-[297px] text-xs text-left text-[#545454]">
//                                             {" "}
//                                             Share tips and experiences about dating.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="self-stretch h-0 relative" />
//                     </div>
//                     <div className="flex flex-col justify-start items-start w-[390px] gap-4">
//                         <div className="flex flex-col justify-start items-start self-stretch gap-4 px-4">
//                             <div className="flex justify-center items-center self-stretch relative gap-2">
//                                 <p className="flex-grow w-[330px] text-xs text-left text-[#666362]">
//                                     Because you visited this channel before
//                                 </p>
//                                 <div className="w-5 h-5 relative" />
//                             </div>
//                             <div className="flex flex-col justify-start items-start self-stretch relative gap-4">
//                                 <div className="flex flex-col justify-start items-start self-stretch gap-6">
//                                     <div className="flex flex-col justify-start items-start self-stretch gap-4">
//                                         <div className="flex flex-col justify-start items-center self-stretch gap-2">
//                                             <div className="flex justify-start items-center self-stretch gap-4 px-16">
//                                                 <div className="flex justify-start items-center relative gap-2">
//                                                     <div className="w-4 h-4 relative" />
//                                                     <p className="text-xs text-left text-[#666362]">
//                                                         Finances
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex justify-start items-start">
//                                                     <div className="flex justify-start items-center w-[97px] rounded-3xl">
//                                                         <div className="flex justify-center items-center relative gap-2">
//                                                             <p className="text-xs text-center text-[#0d479b]">
//                                                                 Join
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex justify-start items-start self-stretch relative gap-6 px-4">
//                                                 <div className="flex justify-start items-start flex-grow relative gap-4">
//                                                     <div className="w-8 h-8 relative rounded-[32px] bg-[#f4ce9b]" />
//                                                     <div className="flex flex-col justify-start items-center flex-grow gap-2">
//                                                         <div className="flex justify-start items-center self-stretch relative gap-2">
//                                                             <p className="text-sm font-medium text-left text-[#545454]">
//                                                                 QuietQuester
//                                                             </p>
//                                                             <p className="text-xs text-left text-[#545454]">
//                                                                 1d
//                                                             </p>
//                                                         </div>
//                                                         <div className="flex flex-col justify-start items-start self-stretch gap-2">
//                                                             <div className="flex justify-start items-start self-stretch relative gap-2">
//                                                                 <p className="flex-grow w-[234px] text-base text-left text-[#101010]">
//                                                                     {" "}
//                                                                     A few years ago, I was living paycheck to paycheck, drowning in debt,
//                                                                     and constantly stressed about money. It felt like no matter how hard I
//                                                                     worked, I just couldn’t get ahead.
//                                                                 </p>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="w-5 h-5 relative" />
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-col justify-start items-start self-stretch gap-4 pl-14 pr-6">
//                                             <div className="flex justify-start items-center self-stretch gap-6">
//                                                 <div className="flex justify-start items-center flex-grow gap-4">
//                                                     <div className="flex justify-start items-center relative gap-1 p-0.5">
//                                                         <div className="w-5 h-5 relative" />
//                                                         <p className="text-xs text-left text-[#545454]">
//                                                             1
//                                                         </p>
//                                                     </div>
//                                                     <div className="flex justify-end items-center relative gap-1 p-0.5">
//                                                         <div className="w-5 h-5 relative" />
//                                                         <p className="text-xs text-left text-[#545454]">
//                                                             1.4k
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="flex justify-end items-center flex-grow relative gap-1 p-0.5">
//                                                     <div className="w-5 h-5 relative" />
//                                                     <p className="text-xs text-left text-[#545454]">
//                                                         1.4k
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="self-stretch h-0 relative" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col justify-start items-start w-[390px] absolute left-0 top-0">                
//                 <div className="flex justify-start items-center self-stretch gap-2 p-4">
//                     <div className="flex justify-start items-center relative gap-2">
//                         <div className="flex justify-start items-center relative gap-[6.400000095367432px]">
//                             <svg
//                                 width={33}
//                                 height={27}
//                                 viewBox="0 0 33 27"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-[32.21px] h-[27.01px]"
//                                 preserveAspectRatio="none"
//                             >
//                                 <path
//                                     d="M23.9678 23.0504C25.4472 21.8274 26.0143 20.4451 26.1129 19.9067C27.8307 21.0532 31.3254 23.4005 31.5621 23.6174C31.7988 23.8344 31.9977 24.1517 32.0676 24.2832C32.5213 25.7625 31.7635 26.5186 31.3279 26.7118C30.7361 27.1457 29.9964 27.0076 29.7005 26.8844L23.9678 23.0504Z"
//                                     fill="#054CA6"
//                                 />
//                                 <path
//                                     d="M23.9678 23.0504C25.4472 21.8274 26.0143 20.4451 26.1129 19.9067C27.8307 21.0532 31.3254 23.4005 31.5621 23.6174C31.7988 23.8344 31.9977 24.1517 32.0676 24.2832C32.5213 25.7625 31.7635 26.5186 31.3279 26.7118C30.7361 27.1457 29.9964 27.0076 29.7005 26.8844L23.9678 23.0504Z"
//                                     fill="url(#paint0_linear_197_1915)"
//                                     fill-opacity="0.97"
//                                 />
//                                 <path
//                                     fill-rule="evenodd"
//                                     clip-rule="evenodd"
//                                     d="M25.1408 17.612C26.1879 14.5565 26.5732 11.0462 25.3233 8.06842C24.0719 5.08711 21.7679 2.67005 18.8498 1.27741C15.9317 -0.115238 12.6034 -0.386217 9.4984 0.51606C6.39345 1.41834 3.72873 3.43086 2.01154 6.17048C0.294358 8.91011 -0.355372 12.1855 0.18605 15.3731C0.727472 18.5607 2.42224 21.438 4.94769 23.457C7.47315 25.4761 10.6529 26.496 13.8817 26.3226C17.1104 26.1492 19.8044 24.732 22.0991 22.4541L22.0915 22.4468C23.1121 21.6304 24.9628 19.0893 25.1408 17.612ZM22.7755 16.4613L22.7746 16.4609C22.6751 16.6333 22.562 17.1213 22.8776 17.5897C23.2557 18.1917 23.8136 19.5163 23.2415 20.2165C23.1758 20.3891 22.7019 20.6801 21.0647 20.325C20.896 20.2496 20.4646 20.2203 20.1332 20.5784L20.1325 20.5776C18.3654 22.3318 16.2056 23.1642 13.7192 23.2978C11.2328 23.4313 8.78418 22.6459 6.8394 21.0911C4.89462 19.5363 3.58953 17.3206 3.1726 14.8659C2.75567 12.4112 3.25601 9.88892 4.57836 7.77922C5.90071 5.66951 7.95274 4.11973 10.3438 3.42492C12.7348 2.7301 15.2979 2.93877 17.545 4.01121C19.7921 5.08364 21.5664 6.94495 22.5301 9.24076C23.4937 11.5365 23.5839 14.1065 22.7755 16.4613Z"
//                                     fill="#054CA6"
//                                 />
//                                 <path
//                                     fill-rule="evenodd"
//                                     clip-rule="evenodd"
//                                     d="M25.1408 17.612C26.1879 14.5565 26.5732 11.0462 25.3233 8.06842C24.0719 5.08711 21.7679 2.67005 18.8498 1.27741C15.9317 -0.115238 12.6034 -0.386217 9.4984 0.51606C6.39345 1.41834 3.72873 3.43086 2.01154 6.17048C0.294358 8.91011 -0.355372 12.1855 0.18605 15.3731C0.727472 18.5607 2.42224 21.438 4.94769 23.457C7.47315 25.4761 10.6529 26.496 13.8817 26.3226C17.1104 26.1492 19.8044 24.732 22.0991 22.4541L22.0915 22.4468C23.1121 21.6304 24.9628 19.0893 25.1408 17.612ZM22.7755 16.4613L22.7746 16.4609C22.6751 16.6333 22.562 17.1213 22.8776 17.5897C23.2557 18.1917 23.8136 19.5163 23.2415 20.2165C23.1758 20.3891 22.7019 20.6801 21.0647 20.325C20.896 20.2496 20.4646 20.2203 20.1332 20.5784L20.1325 20.5776C18.3654 22.3318 16.2056 23.1642 13.7192 23.2978C11.2328 23.4313 8.78418 22.6459 6.8394 21.0911C4.89462 19.5363 3.58953 17.3206 3.1726 14.8659C2.75567 12.4112 3.25601 9.88892 4.57836 7.77922C5.90071 5.66951 7.95274 4.11973 10.3438 3.42492C12.7348 2.7301 15.2979 2.93877 17.545 4.01121C19.7921 5.08364 21.5664 6.94495 22.5301 9.24076C23.4937 11.5365 23.5839 14.1065 22.7755 16.4613Z"
//                                     fill="url(#paint1_linear_197_1915)"
//                                     fill-opacity="0.97"
//                                 />
//                                 <path
//                                     fill-rule="evenodd"
//                                     clip-rule="evenodd"
//                                     d="M20.7499 15.9839C21.4145 14.0469 21.5417 12.0843 20.7491 10.1959C19.9561 8.30676 18.4961 6.77516 16.647 5.8927C14.798 5.01023 12.6889 4.83852 10.7214 5.41026C8.75392 5.982 7.06539 7.25726 5.97728 8.99325C4.88916 10.7292 4.47745 12.8047 4.82053 14.8246C5.16361 16.8445 6.23752 18.6677 7.8378 19.9471C9.43809 21.2265 11.453 21.8728 13.4989 21.7629C15.5228 21.6542 17.0078 20.7293 18.4471 19.3121C18.7433 19.3414 19.2418 19.4134 19.7049 19.4812C20.3088 19.5697 21.0179 19.6532 21.5352 19.3293C21.7462 19.1973 21.8275 18.9836 21.8545 18.7362C21.8778 18.523 21.8602 18.238 21.7489 17.9095L20.7499 15.9839ZM16.8731 14.6078L16.8668 14.6056L16.8182 14.76C16.5951 15.2221 16.0812 16.1895 15.8702 16.2663L15.8695 16.2655C15.869 16.2661 15.8685 16.2666 15.8679 16.2671C15.8621 16.2691 15.8565 16.2704 15.8511 16.2709C15.8388 16.2721 15.8344 16.2811 15.8374 16.2971C15.1444 16.9697 14.2311 17.3693 13.2657 17.4212C12.2854 17.4738 11.3199 17.1641 10.5531 16.5511C9.78627 15.938 9.27169 15.0644 9.10729 14.0966C8.9429 13.1287 9.14018 12.1342 9.66157 11.3024C10.183 10.4705 10.9921 9.85946 11.9348 9.5855C12.8776 9.31154 13.8882 9.39382 14.7742 9.81667C15.6602 10.2395 16.3598 10.9734 16.7397 11.8786C17.1037 12.7457 17.15 13.7119 16.8731 14.6078Z"
//                                     fill="#054CA6"
//                                 />
//                                 <path
//                                     fill-rule="evenodd"
//                                     clip-rule="evenodd"
//                                     d="M20.7499 15.9839C21.4145 14.0469 21.5417 12.0843 20.7491 10.1959C19.9561 8.30676 18.4961 6.77516 16.647 5.8927C14.798 5.01023 12.6889 4.83852 10.7214 5.41026C8.75392 5.982 7.06539 7.25726 5.97728 8.99325C4.88916 10.7292 4.47745 12.8047 4.82053 14.8246C5.16361 16.8445 6.23752 18.6677 7.8378 19.9471C9.43809 21.2265 11.453 21.8728 13.4989 21.7629C15.5228 21.6542 17.0078 20.7293 18.4471 19.3121C18.7433 19.3414 19.2418 19.4134 19.7049 19.4812C20.3088 19.5697 21.0179 19.6532 21.5352 19.3293C21.7462 19.1973 21.8275 18.9836 21.8545 18.7362C21.8778 18.523 21.8602 18.238 21.7489 17.9095L20.7499 15.9839ZM16.8731 14.6078L16.8668 14.6056L16.8182 14.76C16.5951 15.2221 16.0812 16.1895 15.8702 16.2663L15.8695 16.2655C15.869 16.2661 15.8685 16.2666 15.8679 16.2671C15.8621 16.2691 15.8565 16.2704 15.8511 16.2709C15.8388 16.2721 15.8344 16.2811 15.8374 16.2971C15.1444 16.9697 14.2311 17.3693 13.2657 17.4212C12.2854 17.4738 11.3199 17.1641 10.5531 16.5511C9.78627 15.938 9.27169 15.0644 9.10729 14.0966C8.9429 13.1287 9.14018 12.1342 9.66157 11.3024C10.183 10.4705 10.9921 9.85946 11.9348 9.5855C12.8776 9.31154 13.8882 9.39382 14.7742 9.81667C15.6602 10.2395 16.3598 10.9734 16.7397 11.8786C17.1037 12.7457 17.15 13.7119 16.8731 14.6078Z"
//                                     fill="url(#paint2_linear_197_1915)"
//                                     fill-opacity="0.97"
//                                 />
//                                 <defs>
//                                     <lineargradient
//                                         id="paint0_linear_197_1915"
//                                         x1="26.3576"
//                                         y1="21.1676"
//                                         x2="34.6663"
//                                         y2="26.2193"
//                                         gradientUnits="userSpaceOnUse"
//                                     >
//                                         <stop stop-color="#0477E2" stop-opacity={0} />
//                                         <stop offset="0.85139" stop-color="#0477E2" />
//                                     </lineargradient>
//                                     <lineargradient
//                                         id="paint1_linear_197_1915"
//                                         x1="7.57177"
//                                         y1="4.6716"
//                                         x2="26.7415"
//                                         y2="22.0308"
//                                         gradientUnits="userSpaceOnUse"
//                                     >
//                                         <stop stop-color="#0477E2" stop-opacity={0} />
//                                         <stop offset="0.85139" stop-color="#0477E2" />
//                                     </lineargradient>
//                                     <lineargradient
//                                         id="paint2_linear_197_1915"
//                                         x1="9.6799"
//                                         y1="8.04347"
//                                         x2="21.863"
//                                         y2="19.4883"
//                                         gradientUnits="userSpaceOnUse"
//                                     >
//                                         <stop stop-color="#0477E2" stop-opacity={0} />
//                                         <stop offset="0.85139" stop-color="#0477E2" />
//                                     </lineargradient>
//                                 </defs>
//                             </svg>
//                             <p className="text-[19.200000762939453px] font-semibold text-left text-[#101010]">
//                                 Thiscreet
//                             </p>
//                         </div>
//                         <svg
//                             width={17}
//                             height={17}
//                             viewBox="0 0 17 17"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="w-4 h-4 relative"
//                             preserveAspectRatio="xMidYMid meet"
//                         >
//                             <path
//                                 d="M13.6074 6L8.60742 11L3.60742 6"
//                                 stroke="#0B1215"
//                                 stroke-width="1.5"
//                                 stroke-linecap="round"
//                                 stroke-linejoin="round"
//                             />
//                         </svg>
//                     </div>
//                     <div className="flex justify-end items-center flex-grow gap-4">
//                         <div className="flex justify-end items-start relative space-x-[-28px]">
//                             <svg
//                                 width={24}
//                                 height={25}
//                                 viewBox="0 0 24 25"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-6 h-6 relative"
//                                 preserveAspectRatio="xMidYMid meet"
//                             >
//                                 <path
//                                     d="M14.8569 17.5817C16.7514 17.357 18.5783 16.9116 20.3111 16.2719C18.8743 14.677 17.9998 12.5656 17.9998 10.25V9.54919C17.9999 9.53281 18 9.51641 18 9.5C18 6.18629 15.3137 3.5 12 3.5C8.68629 3.5 6 6.18629 6 9.5L5.9998 10.25C5.9998 12.5656 5.12527 14.677 3.68848 16.2719C5.4214 16.9116 7.24843 17.357 9.14314 17.5818M14.8569 17.5817C13.92 17.6928 12.9666 17.75 11.9998 17.75C11.0332 17.75 10.0799 17.6929 9.14314 17.5818M14.8569 17.5817C14.9498 17.8711 15 18.1797 15 18.5C15 20.1569 13.6569 21.5 12 21.5C10.3431 21.5 9 20.1569 9 18.5C9 18.1797 9.05019 17.8712 9.14314 17.5818"
//                                     stroke="#0B1215"
//                                     stroke-width="1.5"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                             <div className="flex flex-row-reverse justify-between items-end w-3 relative">
//                                 <svg
//                                     width={16}
//                                     height={17}
//                                     viewBox="0 0 16 17"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4 relative"
//                                     preserveAspectRatio="none"
//                                 >
//                                     <circle cx={8} cy="8.5" r="7.75" fill="#C82218" stroke="white" stroke-width="0.5" />
//                                 </svg>
//                                 <p className="w-3 h-3 text-[11px] text-center text-white">
//                                     2
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <svg
//                     width={390}
//                     height={1}
//                     viewBox="0 0 390 1"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="self-stretch h-0 relative"
//                     preserveAspectRatio="none"
//                 >
//                     <path d="M0 0.5L390 0.5" stroke="#F6F6F6" stroke-linecap="round" />
//                 </svg>
//             </div>
//             <div className="flex justify-center items-center w-[97px] h-8 absolute left-[147px] top-[140px] px-2 rounded-3xl bg-[#0d479b]">
//                 <svg
//                     width={12}
//                     height={12}
//                     viewBox="0 0 12 12"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-3 h-3 relative"
//                     preserveAspectRatio="none"
//                 >
//                     <path
//                         d="M6 2V10"
//                         stroke="white"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                     />
//                     <path
//                         d="M8.5 4.49998C8.5 4.49998 6.6588 2.00001 6 2C5.3412 2 3.5 4.5 3.5 4.5"
//                         stroke="white"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                     />
//                 </svg>
//                 <div className="flex justify-center items-center relative gap-2 px-2">
//                     <p className="text-xs font-semibold text-center text-white">
//                         New post
//                     </p>
//                 </div>
//             </div>
//             <div
//                 className="flex flex-col justify-start items-center w-[390px] absolute left-0 top-[776px] gap-2.5 px-4 py-5 rounded-tl-[10px] rounded-tr-[10px] bg-white"
//                 style={{ boxShadow: "0px -6px 43.400001525878906px -12px rgba(97,97,97,0.18)" }}
//             >
//                 <div className="flex justify-center items-center self-stretch gap-6">
//                     <div className="flex flex-col justify-center items-center flex-grow gap-2">
//                         <div className="flex justify-center items-center w-11 relative gap-2 px-3 py-1 rounded-2xl bg-[#d6efff]">
//                             <svg
//                                 width={21}
//                                 height={20}
//                                 viewBox="0 0 21 20"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-5 h-5 relative"
//                                 preserveAspectRatio="xMidYMid meet"
//                             >
//                                 <path
//                                     d="M8.30137 4.02194L3.44926 8.26778C3.03317 8.63192 3.31215 9.27858 3.88532 9.27858C4.23549 9.27858 4.51937 9.54075 4.51937 9.86425V12.5672C4.51937 14.8925 4.51937 16.0552 5.30147 16.7776C6.08357 17.5 7.34235 17.5 9.85992 17.5H11.6401C14.1577 17.5 15.4164 17.5 16.1985 16.7776C16.9807 16.0552 16.9807 14.8925 16.9807 12.5672V9.86425C16.9807 9.54075 17.2645 9.27858 17.6147 9.27858C18.1878 9.27858 18.4668 8.63192 18.0508 8.26778L13.1986 4.02194C12.0391 3.00732 11.4593 2.5 10.75 2.5C10.0407 2.5 9.46092 3.00732 8.30137 4.02194Z"
//                                     stroke="#0D479B"
//                                     stroke-width="1.5"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M10.75 13.3333H10.7575"
//                                     stroke="#0D479B"
//                                     stroke-width={2}
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                     <div className="flex flex-col justify-center items-center flex-grow gap-2">
//                         <div className="flex justify-center items-center w-11 relative gap-2 px-3 py-1 rounded-2xl">
//                             <svg
//                                 width={21}
//                                 height={20}
//                                 viewBox="0 0 21 20"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-5 h-5 relative"
//                                 preserveAspectRatio="xMidYMid meet"
//                             >
//                                 <path
//                                     d="M15.2498 15.5993C15.4561 15.6163 15.6647 15.625 15.8754 15.625C16.749 15.625 17.5877 15.4756 18.3674 15.201C18.3727 15.1347 18.3754 15.0677 18.3754 15C18.3754 13.6193 17.2561 12.5 15.8754 12.5C15.3523 12.5 14.8668 12.6606 14.4655 12.9352M15.2498 15.5993C15.2499 15.6079 15.2499 15.6164 15.2499 15.625C15.2499 15.8125 15.2396 15.9976 15.2195 16.1797C13.7555 17.0197 12.0588 17.5 10.2499 17.5C8.44099 17.5 6.74427 17.0197 5.2803 16.1797C5.2602 15.9976 5.24988 15.8125 5.24988 15.625C5.24988 15.6165 5.2499 15.6079 5.24994 15.5994M15.2498 15.5993C15.2449 14.6188 14.9577 13.7051 14.4655 12.9352M14.4655 12.9352C13.5772 11.546 12.0211 10.625 10.2499 10.625C8.47887 10.625 6.92292 11.5458 6.03462 12.9347M6.03462 12.9347C5.6334 12.6604 5.14818 12.5 4.62549 12.5C3.24478 12.5 2.12549 13.6193 2.12549 15C2.12549 15.0677 2.12818 15.1347 2.13345 15.201C2.91315 15.4756 3.75188 15.625 4.62549 15.625C4.83577 15.625 5.04404 15.6163 5.24994 15.5994M6.03462 12.9347C5.54213 13.7047 5.25486 14.6187 5.24994 15.5994M12.7499 5.625C12.7499 7.00571 11.6306 8.125 10.2499 8.125C8.86917 8.125 7.74988 7.00571 7.74988 5.625C7.74988 4.24429 8.86917 3.125 10.2499 3.125C11.6306 3.125 12.7499 4.24429 12.7499 5.625ZM17.7499 8.125C17.7499 9.16053 16.9104 10 15.8749 10C14.8393 10 13.9999 9.16053 13.9999 8.125C13.9999 7.08947 14.8393 6.25 15.8749 6.25C16.9104 6.25 17.7499 7.08947 17.7499 8.125ZM6.49988 8.125C6.49988 9.16053 5.66041 10 4.62488 10C3.58934 10 2.74988 9.16053 2.74988 8.125C2.74988 7.08947 3.58934 6.25 4.62488 6.25C5.66041 6.25 6.49988 7.08947 6.49988 8.125Z"
//                                     stroke="#888F92"
//                                     stroke-width="1.5"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                     <div className="flex flex-col justify-center items-center flex-grow gap-2">
//                         <div className="flex justify-center items-center relative gap-2 px-3 py-1 rounded-2xl">
//                             <svg
//                                 width={21}
//                                 height={20}
//                                 viewBox="0 0 21 20"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-5 h-5 relative"
//                                 preserveAspectRatio="xMidYMid meet"
//                             >
//                                 <path
//                                     d="M10.75 16.875C14.8921 16.875 18.25 13.797 18.25 10C18.25 6.20304 14.8921 3.125 10.75 3.125C6.60786 3.125 3.25 6.20304 3.25 10C3.25 11.6963 3.92016 13.249 5.03101 14.448C5.45322 14.9037 5.76916 15.4979 5.58851 16.0923C5.43835 16.5863 5.1889 17.0372 4.86316 17.4216C4.99316 17.4449 5.125 17.4632 5.25806 17.4761C5.4198 17.4919 5.58398 17.5 5.75 17.5C6.81834 17.5 7.80847 17.1649 8.62098 16.5941C9.29588 16.7769 10.0104 16.875 10.75 16.875Z"
//                                     stroke="#888F92"
//                                     stroke-width="1.5"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                     <div className="flex flex-col justify-center items-center flex-grow gap-2">
//                         <div className="flex justify-center items-center relative gap-2 px-3 py-1 rounded-2xl">
//                             <svg
//                                 width={21}
//                                 height={20}
//                                 viewBox="0 0 21 20"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="w-5 h-5 relative"
//                                 preserveAspectRatio="xMidYMid meet"
//                             >
//                                 <path
//                                     d="M13.375 5C13.375 6.72589 11.9759 8.125 10.25 8.125C8.52414 8.125 7.12503 6.72589 7.12503 5C7.12503 3.27411 8.52414 1.875 10.25 1.875C11.9759 1.875 13.375 3.27411 13.375 5Z"
//                                     stroke="#888F92"
//                                     stroke-width="1.5"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                                 <path
//                                     d="M4.00098 16.7652C4.05956 13.3641 6.83492 10.625 10.25 10.625C13.6652 10.625 16.4406 13.3642 16.4991 16.7654C14.5968 17.6383 12.4804 18.125 10.2503 18.125C8.02003 18.125 5.90344 17.6383 4.00098 16.7652Z"
//                                     stroke="#888F92"
//                                     stroke-width="1.5"
//                                     stroke-linecap="round"
//                                     stroke-linejoin="round"
//                                 />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Test