import React, {Component} from 'react'
import axios from 'axios'

import './Dashboard.css'


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],

        }
    }

    componentDidMount() {
        this.getAllPosts()
    }

    getAllPosts = () => {
        axios.get(`/api/posts`)
        .then(res => this.setState({ posts: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        // const {id, title, img, content, author_id} = this.props.posts
        const displayPosts = this.state.posts.map((element, index) => {
            return (
                <div>
                    <h2>{element.title}</h2>
                    <img src={element.img} />
                    <p>{element.username}</p>
                </div>
            )
        })
        return(
            <div className="dashboard_comp">
                Dashboard.js
                <div className="dash-inputs">
                    <input 
                        className="search_input" 
                        defaultValue="Search" />
                    <button 
                        className="search_butt">
                        Search
                    </button>
                    <button 
                        className="reset_butt">
                        Reset
                    </button>
                    <label 
                        htmlFor="mypost">
                        My Posts
                    </label>
                    <input 
                        className="mypost-check" 
                        name="mypost" 
                        defaultValue="true" 
                        type="checkbox"
                        defaultChecked />
                </div>
                <div className="dash-posts">
                    {displayPosts}
                </div>
                
            </div>) 
    
        }
    }
    

export default Dashboard