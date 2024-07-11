import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import SignIn from './components/sign-in/SignIn.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Groups from './components/dashboard/Groups.jsx';
import Students from './components/dashboard/Students.jsx';
import Events from './components/dashboard/Events.jsx';
import StudentPage from './components/dashboard/StudentPage.jsx';
import Group from './components/dashboard/groups/Group.jsx';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "student/:studentId",
        element: <StudentPage />,
      },
      {
        path: "group/:groupName",
        element: <Group />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
