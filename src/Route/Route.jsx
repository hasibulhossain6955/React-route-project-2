
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Favorites from '../Pages/Favorites';
import Login from '../Pages/Login';
import Phone from '../Pages/Phone';
import ErrorPage from '../Pages/ErrorPage';

const myCreateRoute = createBrowserRouter([
    {
        path:"/",
        element:<div>
             <MainLayout></MainLayout>
             
        </div>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('/Phones.json')
            },
            {
                 path:"/favorites",
                 element:<Favorites></Favorites>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path: "/phones/:id",
                element:<Phone></Phone>,
                loader:()=> fetch('/Phones.json')
            }
        ]

    }
])
export default myCreateRoute;