import React, { useState, useEffect } from 'react';
import axios from "../../../axios"
import Post from '../../../components/Post/Post'
import './Posts.css'

function Posts(props) {

    const [state, setstate] = useState({
        posts:[],
        selectedPostId:null,
        error:false
    })
    useEffect(() => {
        axios.get("/posts")
        .then(response=>{
            const posts = response.data.slice(0,4)
            const updatedPosts = posts.map(post=>{
                return{
                    ...post,
                    author:"Gary"
                }
            })
            setstate({...state,posts:updatedPosts})
        })
        .catch(error => {
            console.log(error)
            setstate({error:true})
        })

    }, [])

    const postSelectedHandler= (id)=>{
        setstate({...state,selectedPostId:id})
    }

    let posts = <p style={{textAlign:"center"}}>Something went wrong!</p>
    // console.log(state)
    if (state.posts.length!=0){
        
        posts = state.posts.map(
            post =>{
                return <Post 
                    key={post.id} 
                    title={post.title}
                    author={post.author}
                    clicked={()=>postSelectedHandler(post.id)}
                    />
            }
        )
        }else{
            posts=(
                [
                <Post title="loading" author="loading" />,
                <Post title="loading" author="loading" />,
                <Post title="loading" author="loading" />,
                <Post title="loading" author="loading" />,
                ]
            )
    }
    return (
        <section className="Posts">
            {posts}
        </section>
    )
}

export default Posts


