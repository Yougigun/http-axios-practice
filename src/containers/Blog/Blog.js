import React, { Component, Suspense } from 'react';
// import axios from 'axios'
import axios from '../../axios'
// import { Route } from 'react-router-dom'
import { Route, Switch, NavLink, Link, Redirect, Router } from 'react-router-dom'
import './Blog.css';
import Posts from './Posts/Posts'
// import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'

// const AsyncNewPost = asyncComponent(()=>{
//     return import('./NewPost/NewPost');
// })

const AsyncNewPost = React.lazy(() => import('./NewPost/NewPost'))
class Blog extends Component {
    // state = {
    //     auth : true
    // }
    state = {
        show: false
    }
    modelHandler = () => {
        this.setState(prevState => {return{ show: !prevState.show }})
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <button onClick={this.modelHandler}>Toggle model</button>
                {this.state.show ? <Suspense fallback={<div>Loading...</div>}><AsyncNewPost /></Suspense> : null}
            </React.Fragment>
            // <div className="Blog">
            //     <header>
            //         <nav>
            //             <ul>
            //                 <li><NavLink
            //                     exact
            //                     to="/posts"
            //                     activeClassName="my-active"
            //                     activeStyle={{ color: 'red', textDecoration: 'underline' }}
            //                 >Posts</NavLink></li>
            //                 <li><NavLink to={{
            //                     pathname: "/new-post",
            //                     hash: "#submit",
            //                     search: "?quick-submit=true"
            //                 }}>New Post</NavLink></li>

            //             </ul>
            //         </nav>
            //     </header>
            //     <Switch>
            //         {this.state.auth ? <Route path="/new-post" exact render={()=><Suspense fallback={<div>Loading...</div>}><AsyncNewPost/></Suspense>} />:null}
            //         <Route path="/posts" component={Posts} />
            //         <Route render={()=><h1>Not found</h1>}/>
            //         {/* <Redirect from="/" to="/posts"  /> */}
            //     </Switch>
            // </div>

        );
    }
}

export default Blog;