import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"

import Event from "./pages/Event"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import NewEvent from "./pages/NewEvent"
import EditEvent from "./pages/EditEvent"

export default function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />}/>
        <Route path="/event/new" element={<NewEvent />}/>
        {/* <Route path="/event/:id" element={<Event />}/> */}
        <Route path="/event/:id/edit" element={<EditEvent />}/>
        <Route path="*" element={(<NotFound />)}/>
        <Route path="/register" element={(<Register />)}/>
        <Route path="/login" element={(<Login />)}/>
      </Routes>
  )
}