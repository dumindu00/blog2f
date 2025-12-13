
import './App.css'
import About from './pages/About'
import Findmore from './pages/Findmore'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from './layout/RootLayout'
import Join from './pages/Join';
import AdminLogin from './pages/AdminLogin';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminProtectedRoute from './components/AdminProtectedRoute';



function App() {
  
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>

          <Route index element={<Home />} />

            <Route path='findmore' element={<Findmore />} />

          <Route path='about' element={<About />} />

          <Route path='join' element={<Join />} />
          
          <Route path='contact' element={<Contact/>} />
          <Route path='admin' element={
                        <AdminProtectedRoute>
                                      <Admin />
                        </AdminProtectedRoute>
  } />

          <Route path="/admin-login" element={<AdminLogin />} />
        
        </Route>
        
        
      )
  )

  return <RouterProvider router={router}/>
        
}

export default App
