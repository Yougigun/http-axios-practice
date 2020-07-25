import React, { Component } from 'react';
// import axios from 'axios'
import axios from '../../axios'
// import { Route } from 'react-router-dom'
import { Route, Switch, NavLink, Link, Redirect, Router} from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
})
class Blog extends Component {
    state = {
        auth : true
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                exact
                                to="/posts"
                                activeClassName="my-active"
                                activeStyle={{ color: 'red', textDecoration: 'underline' }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} />:null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=><h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts"  /> */}
                </Switch>
            </div>

        );
    }
}

export default Blog;