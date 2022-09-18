import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Button} from "../components/Button";
import "./Navbar.css"
import  Dropdown from "../components/Dropdown";
import Register from "../Register";
import { confirmAlert } from 'react-confirm-alert';




function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown]= useState(false);
    
    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    

    const showButton = () =>{
        if(window.innerWidth <= 960)
        {
            setButton(false)
        }
        else{
            setButton(true)
        }
    }





    //For DropDown
    // const onMouseEnter = () => {
    //     if(window.innerWidth <= 960)
    //     {
    //         setDropdown(false)
    //     }
    //     else{
    //         setDropdown(true)
    //     }
    // };

    // const onMouseLeave = () => {
    //     if(window.innerWidth <= 960)
    //     {
    //         setDropdown(false)
    //     }
    //     else{
    //         setDropdown(false)
    //     }
    // };

    // This will hold the given effect
const exit=() =>{
    alert("Successfully logout..!")
}

    useEffect (()=>{
        showButton();
    }, []);
    
    window.addEventListener('resize',showButton)
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* For LOGO */}
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        HKSP <i className='fab fa-typo3'/>
                    </Link>
                    {/* For Menu Bar Lines */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ?  'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    {/* MenuBar Disappear After Click */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li> */}
                        <li className='nav-item'>
                            <Link to='/EvBook' className='nav-links' onClick={closeMobileMenu}>
                                Book Event
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/eventlist' className='nav-links' onClick={closeMobileMenu}>
                                EventList
                            </Link>
                        </li>
                
                        {/* <li>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li> */}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'onClick={exit}>Logout</Button>}
                </div>
            </nav>
        </>
    )
}
export default Navbar