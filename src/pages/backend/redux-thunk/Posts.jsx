import PropTypes from 'prop-types'

const Posts = ({posts}) => {
    return (
        <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul>
    )
}
Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts
