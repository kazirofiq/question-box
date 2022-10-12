import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({fixed}) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3'>
           


             <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown lg:hidden">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to="/home">Topic</Link></li>
        <li><Link to="/statics">Static</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  </div>
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="navbar-end ">
    
  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

  <li className="nav-item">
                                        <Link to="/"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                        
                                        >
                                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/home"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                        
                                        >
                                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Topic</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/statics"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                                        
                                        
                                        >
                                        <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Static</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                                        
                                        >
                                        <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                                        </Link>
                                    </li>
                                    
                            </ul>

  </div>
</div>
            </div>
        
    );
};

export default Header;