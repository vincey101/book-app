import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignUp from './components/signup/SignUp'
import SignIn from './components/signin/SignIn'
import Home from './components/home/Home'
import { userState } from "./components/atom/UserAtom"
import { RecoilRoot, useRecoilValue } from 'recoil'
import './index.css'

function App() {
  const user = useRecoilValue(userState)
  return (
    <div >
      <Router>
        <Routes>
          {user.email ?
            <>
              <Route path="/" exact element={<Home />} />
              <Route path="*" element={<Home />} />
            </>
            :
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" exact element={<SignUp />
              }> </Route>
              <Route path="*" element={<SignIn />} />
            </>
          }
        </Routes>
      </Router>
    </div>

  )
}

export default App