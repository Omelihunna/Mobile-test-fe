export interface IPost {
    username: string
    text: string,
    likeCount: number,
    forwardCount: number
}

export const testposts: IPost[] = [{
    username: "SilentSage",
    text: `I'm feeling really overwhelmed right now. My parents have always had high expectations for me, and I feel like I can never live up to them.They want me to follow a specific career path and constantly compare me to my older sibling, who is a doctor.I’m passionate about art and want to pursue a career in graphic design, but every time I bring it up, they dismiss it and say it’s not a 'real' profession.It's causing a lot of tension at home, and I’m starting to feel resentful.Has anyone else dealt with something similar? How did you handle it?`,
    likeCount: 0,
    forwardCount: 0
},
{
    username: "Omzy",
    text: `I'm feeling really overwhelmed right now. My parents have always had high expectations for me, and I feel like I can never live up to them.They want me to follow a specific career path and constantly compare me to my older sibling, who is a doctor.I’m passionate about art and want to pursue a career in graphic design, but every time I bring it up, they dismiss it and say it’s not a 'real' profession.It's causing a lot of tension at home, and I’m starting to feel resentful.Has anyone else dealt with something similar? How did you handle it?`,
    likeCount: 16,
    forwardCount: 3
}]

export const getTestPosts = () => {
    return testposts
}