import React, { Component } from 'react';
// import axios from 'axios'
import axios from '../../axios'
// import { Route } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact 
                                to="/"
                                activeClassName="my-active"
                                activeStyle={{color:'red',textDecoration:'underline'}}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash:"#submit",
                                search:"?quick-submit=true"
                            }}>New Post</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=> <h1>HOME</h1>}/> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post"  component={NewPost}/>
                {/* <Route path="/new-post" exact > <NewPost/> </Route> */}
            </div>
                
        );
    }
}

export default Blog;