import './Posts.css'
import Post from '../../components/Post/Post'

function Posts() {
    return (
        <div className='posts-container'>
            <Post pic='pic' userName='crow' date='today' text='CAWWWW' />
            <Post />
        </div>
    )
}

export default Posts