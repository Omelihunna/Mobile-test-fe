import Post from "../components/Post";
import BottomNav from "../components/BottomNav";
import PollPost from "../components/PollPost";
import {usePostContext} from './../providers/PostContext'
import { IPost } from "../constants/constants";
import TopNav from "../components/TopNav";
import NewPostButton from "../components/NewPostButton";
import { Link } from "react-router-dom";

const Feed: React.FC = () => {
    const {getPosts} = usePostContext()
    const posts = getPosts();

    return (
        <section id="feed" className="pb-16">
            <TopNav />
            <div className="flex align-middle max-w-screen-sm justify-center">
                <Link to={"/new"}>
                <NewPostButton />
                </Link>                
            </div>
            {posts.map((post: IPost) => (
                <Post post={post} />
            ))}
            <PollPost />
            <BottomNav />
        </section>
    )
}

export default Feed

