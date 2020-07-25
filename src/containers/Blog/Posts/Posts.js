import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import axios from "../../../axios"

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

function Posts(props) {
    const [state, setstate] = useState({
        posts: [],
        selectedPostId: null,
        error: false
    })
    useEffect(() => {
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Gary"
                    }
                })
                setstate({ ...state, posts: updatedPosts })
            })
            .catch(error => {
                console.log(error)
                setstate({ error: true })
            })

    }, [])

    const postSelectedHandler = (id) => {
        props.history.push({ pathname: "/posts/" + id })
        // props.history.push("/posts/"+id)
    }

    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>
    if (state.posts.length !== 0) {

        posts = state.posts.map(
            post => {
                return (
                    // <Link>          
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => postSelectedHandler(post.id)}
                    />)
                // </Link>

            }
        )
    } else {
        posts = (
            [
                <Post key="1" title="loading" author="loading" />,
                <Post key="2" title="loading" author="loading" />,
                <Post key="3" title="loading" author="loading" />,
                <Post key="4" title="loading" author="loading" />,
            ]
        )
    }
    return (
        <div>
            <section className="Posts">
                {posts}
            </section>
            {/* <Route path="/post/:id" exact component={FullPost}/> */}
            <Route path={props.match.url+"/:id"} exact component={FullPost} />
        </div>
    )
}

export default Posts


