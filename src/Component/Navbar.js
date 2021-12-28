import React from 'react'
import Login from './Login'
import { useNavigate } from "react-router-dom";

function Navbar({pageName, setLoggedInUser, canSignUp=false, isSignUp = false, isAdmin = false}) {
    const navigate = useNavigate();
    return (
        <div className='main'>
            <header className='container'>
                <h2>
                    Fake
                </h2>
                <h2 >
                    {pageName}
                </h2>
                {!isSignUp && (<ul>
                    {canSignUp ?  <li>
                        <a onClick={() => navigate("/signup")} ><button>Sign Up</button></a>
                    </li> : (
                        <>
                        <li>
                            <a onClick={() => navigate("/dashboard")} ><button>Dashboard</button></a>
                        </li>
                       {!isAdmin && ( <li>
                            <a onClick={() => navigate("/journey")} ><button>Journey</button></a>
                        </li>)}

                        {isAdmin && ( <li>
                            <a onClick={() => navigate("/addStation")} ><button>Add Station</button></a>
                        </li>)}

                        <li>
                            <a onClick={() => setLoggedInUser()} ><button>Logout</button></a>
                        </li>
                    </>)}

                </ul>)}
            </header>
        </div>
    )
}

export default Navbar
