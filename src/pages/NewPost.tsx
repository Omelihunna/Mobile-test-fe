import React from "react";
import { IPost } from "../constants/constants";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup"
import { usePostContext } from "../providers/PostContext";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import avatar from "../assets/avatar.png"

const NewPost: React.FC = () => {
    const { addPost } = usePostContext()
    const navigate = useNavigate();
    const initialValues: IPost = {
        username: "Omzy",
        text: "",
        likeCount: 0,
        forwardCount: 0
    }

    const handleSubmit = (values: IPost) => {
        addPost(values)
        navigate(`/`, { replace: true });
        return console.log("Added Post Successfully")
    }

    const NewPostValidationSchema = Yup.object().shape({
        text: Yup.string()
            .min(1, "Cannot be an Empty Post")
            .max(1000, "You have reached the maximum amount of characters")
            .required("Post text is required")
    })

    return (
        <section className="h-screen relative">
            <TopNav />
            <div className="mt-16">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={NewPostValidationSchema}
                >
                    {({ errors, touched }) => (
                        <Form action="post">
                            <div className="flex justify-start items-center max-w-screen-sm gap-2 p-4">
                                <div className="flex justify-start items-center flex-grow relative gap-2">
                                    <Link to={"/"}>
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 relative"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M6 18L18 6M6 6L18 18"
                                                stroke="#0B1215"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                    <div className="flex flex-col justify-center items-start flex-grow relative gap-1">
                                        <p className="self-stretch w-[247px] text-base text-left text-[#101010]">
                                            New post
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center gap-4">
                                    <button type="submit" className="flex justify-center items-center h-6 px-3 rounded-3xl bg-[#d3dadd]">
                                        <p className="text-sm font-semibold text-center text-[#545454]">
                                            Post
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start w-full gap-[50px]">
                                <div className="flex justify-start items-start self-stretch relative gap-2 px-4">
                                    <img className="w-6 h- rounded-[32px] " src={avatar} />
                                    <div className="flex flex-col justify-start items-start flex-grow gap-2">
                                        <div className="flex flex-col justify-start items-start self-stretch gap-2">
                                            <div className="flex flex-col justify-start items-start self-stretch relative gap-1">
                                                <p className="self-stretch w-[326px] text-sm font-medium text-left text-[#101010]">
                                                    {initialValues.username}
                                                </p>
                                                <div className="flex flex-col justify-start items-start self-stretch h-12 gap-2">
                                                    <div className="flex justify-start items-start self-stretch flex-grow gap-6 rounded-lg">
                                                        <Field type="text" name="text" className="flex justify-start items-start max-w-screen-sm h-[27px] relative gap-1" placeholder="share your thoughts...." required>
                                                        </Field>
                                                        {errors.text && touched.text ? (
                                                            <div><p style={{ color: "red" }}>{errors.text}</p></div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="flex justify-end items-center w-full fixed bottom-0 gap-6 px-4 py-6">
                <div className="flex justify-center items-center relative gap-2 p-1 rounded-[36px] bg-[#f6f6f6]">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10"
                            stroke="#0D479B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div className="flex justify-center items-center relative gap-2 p-1 rounded-[36px] bg-[#0d479b]">
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            d="M10 3.75V16.25M16.25 10L3.75 10"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default NewPost