import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Layout/Main/Main'
import { RouterProvider } from 'react-router-dom'
import { routers } from './Routers/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={routers}>
<Main/>
</RouterProvider>
  </React.StrictMode>,
)
