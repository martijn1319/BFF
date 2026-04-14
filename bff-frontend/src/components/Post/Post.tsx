import './Post.css'

export interface Post {
    pic: string;
    userName: string;
    date: string;
    text: string;
}

function Post(props: Post) {
    return (
        <div className='post-container'>
            <div className='post-pic'>{props.pic}</div>
            <div className='post-info'>
                <p>User: {props.userName}</p>
                <p>Date: {props.date}</p>
            </div>
            <div className='post-text'><p>{props.text}</p></div>
        </div>
    )
}

export default Post