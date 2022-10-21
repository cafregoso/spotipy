import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import {
    Grid,
    Button,
    Typography,
} from '@mui/material'

export default function Room() {
    const [ state, setState ] = useState({ 
        "votes_to_skip": 0, 
        "guest_can_pause": '',
        "is_host": '',
    })

    const { roomCode } = useParams()
    
    useEffect(() => {
        const fetchData = () => {
            fetch(`/api/get-room?code=${ roomCode }`)
            .then((response) => response.json())
            .then((data) => {
                setState({
                    "votes_to_skip": data.votes_to_skip, 
                    "guest_can_pause": data.guest_can_pause,
                    "is_host": data.is_host, 
                })
            })
        }
        fetchData()
    }, [roomCode])
    


    return (
    <div>
        <h2>Code: { roomCode }</h2>
        <p>Votes: { state.votes_to_skip }</p>
        <p>Can pause: { state.guest_can_pause.toString() }</p>
        <p>Is host: { state.is_host.toString() }</p>
    </div>
    )
}
