import React, {Component} from 'react'
import axios from 'axios'
import { getUser } from '../../ducks/reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './Auth.css'
// import helo_logo.png from '../../../assets/helo_logo'


class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRegister = () => {
        const {username, password} = this.state
        axios.post('/api/register', {username, password})
        .then(res => {
            console.log(res.data)
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    handleLogin = () => {
        axios.post('/api/login', {
            username: this.state.username,
            password: this.state.password})
            .then(res => {
                console.log(res.data)
                this.props.getUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div className="auth_component">
                <div className="inputDiv">
                    <h1 className="logo">:D</h1>
                    <h2 className="auth_head">Helo</h2>
                    <div className="auth_ins">
                        <input 
                            className="auth_in" 
                            placeholder="username" 
                            name="username"
                            onChange={this.handleInput} />
                        <br />
                        <input 
                            className="auth_in" 
                            placeholder="password"
                            name="password"
                            onChange={(e) => {this.handleInput(e)}} />
                    </div>
                    <br />
                    <div className="auth_butts">
                        <button 
                            className="auth_butt"
                            onClick={this.handleLogin}>
                                Login
                        </button>
                        <button 
                            className="auth_butt"
                            onClick={this.handleRegister}>
                                Register
                        </button>
                    </div> 
                </div>
            </div>
            ) 
    }
   
}

export default connect(null, { getUser }) (withRouter(Auth))