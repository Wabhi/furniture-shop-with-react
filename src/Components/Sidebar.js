import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import CartButtons from "../Components/CartButtons"
import { FaTimes } from "react-icons/fa"
import { links } from "../Utils/Constant"
import logo from "../Assets/blackhawk-furniture.svg"
import {useProductsContext} from "../Contexts/products_context"

const Sidebar = () => {
  //here I am grabbing the functionality and state from global context to close the sidebar............
  const {isSidebarOpen,CloseSidebar} = useProductsContext()
    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <img src={logo} className="logo" alt="logo" />
                    <button className="close-btn" type="button" onClick={CloseSidebar}>
                          <FaTimes/>
                    </button>
                </div>
                <ul className="links">
                    {links.map(({ id, text, url })=>{
                        return <li key={id}><Link to={url} onClick={CloseSidebar}>{text}</Link></li>
                    })}
                    <li><Link to='/checkout' onClick={CloseSidebar}>CheckOut</Link></li>
                </ul>
                <CartButtons/>
            </aside>
        </SidebarContainer>
    )
}

//Sidebar styling.........................................
const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 95px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: rgb(154,185,115);
    color: var(--clr-grey-2);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
    .logo{
        height:85px;
    }
  }
`

export default Sidebar
