import {Component} from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import { fetchPostsIfNeeded, invalidateSubredit,selectSubredit } from '../../../actions'
import Picker from './Picker'
import Posts from './Posts'

class Container extends Component {
    // constructor (props) {
    //     super(props)
    // }
    handleRefreshClick = (e) => {
        e.preventDefault();
        const {dispatch, selectedSubredit} = this.props;
        dispatch(invalidateSubredit(selectedSubredit));
        dispatch(fetchPostsIfNeeded(selectedSubredit));
    }
    handleChange = (nextSubredit) => {
        const {dispatch} = this.props;
        dispatch(selectSubredit(nextSubredit));
    }
    componentDidMount () {
        const {dispatch, selectedSubredit} = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubredit));
    }
    componentWillReciveProps (nextProps) {
        if (nextProps.selectSubredit !== this.props.selectSubredit) {
            const {dispatch, selectedSubredit} = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubredit));
        }
    }
    render () {
        const {isFetching, lastUpdated, selectedSubredit, posts} = this.props;
        return (
            <div>
                <Picker value={selectedSubredit} onChange={this.handleChange} options={['reactjs', 'frontend']}></Picker>
                <p>
                    {
                        lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString}.{' '}</span>
                    }
                    {
                        !isFetching && <a href="true" onClick={this.handleRefreshClick}>Refresh</a>
                    }
                </p>
                {
                    isFetching && posts.length === 0 && <h2>loading....</h2>
                }
                {
                    !isFetching && posts.length === 0 && <h2>Empty</h2>
                }
                {
                    posts.length > 0 && 
                    <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts}/>
                    </div>
                }
            </div>
        )
    }
}

Container.propTypes = {
    posts: propTypes.array.isRequired,
    isFetching: propTypes.bool.isRequired,
    lastUpdated: propTypes.number,
    dispatch: propTypes.func.isRequired,
    selectedSubredit: propTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    const {selectedSubredit, postsBySubredit} = state 
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubredit[selectedSubredit] || {
        isFetching: true,
        items: []
    }
    return {
        selectedSubredit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Container);

