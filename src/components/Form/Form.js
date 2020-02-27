import React, { Component } from 'react'

//this is for NEW POSTS if we get to it.

export default class Form extends Component {

    render() {
        return(

            <div>
                <label>
                    <input 
                    className="form-title"
                    name="form-title" />
                </label>
                <label>
                    <input 
                    className="form-img"
                    name="form-img" />
                </label>
                <label>
                    <input 
                    className="form-content"
                    name="form-content" />
                </label>
            </div>
            ) 
    }

}

