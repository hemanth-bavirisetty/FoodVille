import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Profile,About,Contact,Error, RestaurentMenu,BodyComponent,Instamart } from '@/Components/Elements/'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: '/',
        element:<BodyComponent />
      },
      {
        path: '/about',
        element:<About />,
        children:[{
            path:"profile",
            element: <Profile />,
        }]
      },
      {
        path: '/contact',
        element:<Contact />
      },
      {
        path: '/restaurent/:id',
        element:<RestaurentMenu />
      },
      {
        path: '/instamart',
        element:<Instamart />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={appRouter} />  
  // </React.StrictMode> 
)
