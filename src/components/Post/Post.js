import React, {Component} from 'react'
import axios from 'axios'

//we're EDITING & DELETING here now

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        // console.log(this.props)
        // console.log(this.state)
    }

    componentDidMount = () => {
        this.getOnePost()
    }

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleImg = (e) => {
        this.setState({
            img: e.target.value
        })
    }

    handleContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    getOnePost = () => {
        axios.get(`/api/posts/${this.props.match.params.postid}`)
        .then(res => {
            console.log(res.data)
            this.setState(res.data)
        })
    }

    editPost = (id, title, img, content) => {
        axios.put(`/api/posts/${id}`, {title, img, content})
        .then(res => this.setState(res.data))
    }

    delete = (id) => {
        axios.delete(`api/posts/${id}`)
        .then(res => this.setState(res.data))
    }

    render() {
    //  console.log(this.props.match.params.postid)
    // console.log(this.state)
        return(

            <div className='edit-post'>
                <h2>{this.state.username}</h2>
                <img src={this.state.profile_pic} />
                <label htmlFor="post-title">Title
                    <input 
                    className="post-title"
                    name="post-title"
                    onChange={this.handleTitle}
                    value={this.state.title} />
                </label>
                <img src={this.state.img} />
                <label htmlFor="post-img">Image
                    <input 
                    className="post-img"
                    name="post-img"
                    onChange={this.handleImg}
                    value={this.state.img} />
                </label>
                <label htmlFor="post-content">Content
                    <input 
                    className="post-content"
                    name="post-content"
                    onChange={this.handleContent}
                    value={this.state.content} />
                </label>
                <button 
                    className="submit-edit-post"
                    onClick={() => {
                        // this.editPost(title, img, content)
                    }}>
                    Submit Changes
                </button>
                <button
                    className="delete-post"
                    onClick={() => this.state.deletePost(this.props.id)}>
                    Delete Post
                </button>
            </div>
            ) 
    }

}

