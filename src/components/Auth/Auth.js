import React, {Component} from 'react'
import axios from 'axios'
import { getUser } from '../../ducks/reducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


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
            <div className="auth-component">
                <h1 className="auth-head">Hello</h1>
                <div className="auth-ins">
                    <input 
                        className="auth-in" 
                        placeholder="username" 
                        name="username"
                        onChange={this.handleInput} />
                        
                    <input 
                        className="auth-in" 
                        placeholder="password"
                        name="password"
                        onChange={(e) => {this.handleInput(e)}} />
                </div>
                <br />
                <div className="auth-butts">
                    <button 
                        className="auth-butt"
                        onClick={this.handleLogin}>
                            Login
                    </button>
                    <button 
                        className="auth-butt"
                        onClick={this.handleRegister}>
                            Register
                    </button>
                </div> 
            </div>
            ) 
    }
   
}

export default connect(null, { getUser }) (withRouter(Auth))