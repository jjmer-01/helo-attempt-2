import React from 'react'
import './Dashboard.css'



function Dashboard() {

    return(
        <div className="dashboard_comp">
            Dashboard.js
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
            <input 
                className="mypost-check" 
                name="mypost" 
                defaultValue="true" 
                type="checkbox"
                defaultChecked />
            <label 
                htmlFor="mypost">
                My Posts
            </label>
        </div>) 

}

export default Dashboard