import React, {Component} from 'react'
import axios from 'axios'

//we're EDITING & DELETING here now

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.id,
            title: this.props.match.title,
            img: this.props.match.img,
            content: this.props.match.content
        }
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

    getOnePost = (id) => {
        axios.get(`/api/posts/${id}`, {id})
        .then(res => this.setState(res.data))
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
 console.log(this.props.match.params)
        return(

            <div className='edit-post'>
                <label htmlFor="post-title">Title
                    <input 
                    className="post-title"
                    name="post-title"
                    onChange={this.handleTitle} />
                </label>
                <label htmlFor="post-img">Image
                    <input 
                    className="post-img"
                    name="post-img"
                    onChange={this.handleImg} />
                </label>
                <label htmlFor="post-content">Content
                    <input 
                    className="post-content"
                    name="post-content"
                    onChange={this.handleContent} />
                </label>
                <button 
                    className="submit-edit-post"
                    onClick={() => {
                        this.props.editPost(this.props.getOnePost, this.state.title, this.state.img, this.state.content)
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

