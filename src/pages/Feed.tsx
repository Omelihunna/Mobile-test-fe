import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { getTestPosts, testposts } from "../constants/constants";
import BottomNav from "../components/BottomNav";

const Feed: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const newPosts = getTestPosts();
        setPosts(newPosts);
    }, [testposts]);

    return (
        <section id="feed" className="pb-16">
            {posts.map((post) => (
                <Post post={post} />
            ))}
            <BottomNav />
        </section>
    )
}

export default Feed

