import React from 'react'
import { connect } from 'react-redux'
// import { getUser } from '../../ducks/reducer'
// import axios from 'axios'

const Nav = (props) => {

    // render() {
    //     let { username } = this.props

        return (
            <div>
                Nav.js
                {/* <p>{props.user.profile_pic}</p>
                <p>{props.user.username}</p>
                <p>Home link</p>
                <p>New Post link</p>
                <p>Logout link</p> */}
            </div> 
        )
    }
       
// }

const mapStateToProps = reduxState => {
    const { username, profile_pic } = reduxState
    return {
        username: "",
        profile_pic: ""
    }
}

export default connect(mapStateToProps)(Nav)