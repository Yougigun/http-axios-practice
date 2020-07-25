import React, { useState, useEffect } from 'react'

function asyncComponent(importComponent) {
    return (props)=>{
        const [state,setState] = useState({component:null})
        useEffect(()=>{
            importComponent().then(cmp=>{
                setState({component:cmp.default})
            })},[])
        const C = state.component
        return C? <C {...props}/> : null
    }
}

export default asyncComponent
