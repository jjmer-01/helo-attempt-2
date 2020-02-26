import React from 'react'



function Dashboard() {

    return(
        <div className="dashboard-comp">
            Dashboard.js
            <input 
                className="search-input" 
                defaultValue="Search" />
            <button 
                className="search-butt">
                Search
            </button>
            <button 
                className="reset-butt">
                Reset
            </button>
            <input 
                className="mypost-check" 
                name="mypost" 
                defaultValue="true" 
                type="checkbox" />
            <label 
                htmlFor="mypost">
                My Posts
            </label>
        </div>) 

}

export default Dashboard