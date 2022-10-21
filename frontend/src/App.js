import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout/Layout";
import Home from './Pages/Home/Home'
import JoinRoom from './Pages/JoinRoom/JoinRoom'
import CreateRoom from './Pages/CreateRoom/CreateRoom'

import "./App.css";
import Room from "./Pages/Room/Room";

function App() {
  const [ state, setState ] = useState({
    roomCode: null
  })

  useEffect(() => {
    const get_data = async () => {
      fetch('/api/user-in-room/')
      .then(response => response.json())
      .then(data => {
        setState({
          'roomCode': data.code
        })
      })
    }

    get_data()
  }, [state.roomCode])

  return (
    <div className="center">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} className="App">
            <Route index element={ state.roomCode ? <Navigate to={`/room/${state.roomCode}`} /> : <Home /> } />
            <Route path="join" element={<JoinRoom />} />
            <Route path="create" element={<CreateRoom />} />
            <Route path="room/:roomCode" element={ <Room /> } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
