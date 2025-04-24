
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/Home",
    element: <Dashboard />,
  },
]);


function App() {
  return (
    <>

      <RouterProvider router={router} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

    </>


  );
}

export default App;
