import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './FullPost.css';


const FullPost = (props) => {
    const [stateLoadedPost, setStateLoadedPost] = useState(null)
    useEffect(() => {
        setStateLoadedPost(null) // for show loading during data fetching
        axios.get("/posts/" + props.match.params.id)
            .then(res => {
                //   console.log(res)
                setStateLoadedPost(res.data )
            })
                    // return ()
                }
            , [props.match.params.id])

        const deletePostHandler = () => {
            axios.delete('/posts/' + props.match.params.id)
                .then(res => {
                    console.log(res)
                })
        }
        

        // let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        let post = <p style={{ textAlign: "center" }}>Loading!</p>
        if (stateLoadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{stateLoadedPost.title}</h1>
                    <p>{stateLoadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={deletePostHandler}>Delete</button>
                    </div>
                </div>

            )}
        console.log("render");
        return post;
        }


export default FullPost;
