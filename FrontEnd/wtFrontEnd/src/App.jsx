import LandingPage from "./pages/LandingPage"
import SignIn from "./pages/Signin"
import SignUp from "./pages/Signup"
import NoPage from "./pages/NoPage"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>}></Route>
          <Route path="/home" element={<LandingPage/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="*" element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
