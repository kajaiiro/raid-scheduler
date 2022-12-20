import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"

import Event from "./pages/Event"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreateEvent from "./pages/CreateEvent"
import UpdateEvent from "./pages/UpdateEvent"

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />}/>
        <Route path="/event/new" element={<CreateEvent />}/>
        {/* <Route path="/event/:id" element={<Event />}/> */}
        <Route path="/event/:id/edit" element={<UpdateEvent />}/>
        <Route path="*" element={(<NotFound />)}/>
        <Route path="/register" element={(<Register />)}/>
        <Route path="/login" element={(<Login />)}/>
      </Routes>
  )
}