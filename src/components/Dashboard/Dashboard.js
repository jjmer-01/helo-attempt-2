import React, {Component} from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import axios from 'axios'
import Form from '../Form/Form'
import Post from '../Post/Post'

import './Dashboard.css'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
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
            // console.log(element)
            return (
                <Link to={`/dashboard/new/${element.post_id}`}>
                    <div>
                    <h2>{element.title}</h2>
                    <img src={element.img} />
                    <p>{element.content}</p>
                    </div>
                </Link>
               
            )
        })
        return(
            <Switch>
                <Route exact path="/dashboard"
                    render={() => (
                        <div className="dashboard_comp">
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
                            {displayPosts}
                            </div>
                    )} />
                <Route exact path="/dashboard/post/:postid" component={Form} />
                <Route exact path="/dashboard/new/:postid" component={Post} />
            </Switch>          
            
            ) 
        }
    }
    

// export default Dashboard