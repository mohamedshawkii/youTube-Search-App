import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Error from './Utilits/Error.jsx'

import VideoDetails from './components/videodetails/VideoDetails.jsx'
import SearchBar from './components/searchbar/SearchBar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchBar />,
    errorElement: <Error />,
  },
  {
    path: '/video/:videoCode',
    element: <VideoDetails/>,
  }
  
]) 


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
      <App />
    </React.StrictMode>

)
