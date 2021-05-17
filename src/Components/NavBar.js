import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../Assets/blackhawk-furniture.svg"
import styled from "styled-components"
import { FaBars } from 'react-icons/fa'
import { links } from "../Utils/Constant"
import CartButtons from "../Components/CartButtons"
import {useProductsContext} from "../Contexts/products_context"
const NavBar = () => {
    const {OpenSidebar} = useProductsContext()
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={Logo} alt="logo" width="150px" height="110px" title="BLACKHAWK HOME"/>
                    </Link>
                    <button type="button" className="nav-toggle" onClick={OpenSidebar}>
                        <FaBars/>
                    </button>
                </div>
                <ul className="nav-links">
                    {/* getting links from another file and show them as text..........Util files. */}
                    {links.map((link) => {
                        const {id,text,url} = link
                        return <li key={id}><Link to={url}>{text}</Link></li>
                    })}
                </ul>
                <CartButtons/>
            </div>
        </NavContainer>
    )
}
export default NavBar

//Styled Component for Navbar....................
const NavContainer = styled.nav`
  height: 7rem;
  display: flex;
  box-shadow: 1px 3px 2px 0px rgba(128, 0, 0, 1);
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
      margin-top:2px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 4px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`