import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Nav.css'


const Nav = (props) => {


        return (
            <div className="nav_comp">
                <img src={props.profile_pic} />
                <p>{props.username}</p>
                <Link to="/dashboard">Home link</Link>
                <br />
                {/* <Link to="/dashboard/new">New Post link</Link> */}
                <br />
                <Link to="/">Logout link</Link>
            </div> 
        )
    }
       

const mapStateToProps = reduxState => {
    const { username, profile_pic } = reduxState.user
    return {
        username,
        profile_pic
    }
}

export default connect(mapStateToProps)(Nav)