import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 shadow-lg">
               <Logo></Logo>

                <ul className="flex gap-5">
                    <li>
                    <NavLink
                            to="/"
                                     className={({ isActive, isPending }) =>
                                       isPending ? "pending" : isActive ? "text-blue-600 underline font-semibold" : ""
  }
>
  Home
</NavLink>
                    </li>


                    <li>
                    <NavLink
  to="/favorites"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline font-semibold" : ""
  }
>
  Favorites
</NavLink>
                    </li>

 
                    <li>
                    <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-blue-600 underline font-semibold" : ""
  }
>
 Login
</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;