import React from 'react'
import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import { useFilterContext } from "../Contexts/filter_context"
import {getUniqueValues} from "../Utils/Helper"
const Filters = () => {
    //grab all the things from filter_context......
    const { filter: { text, company, category, }, filterByText, clearFilter, allProducts } = useFilterContext()
    
    //here i am checking for data/which is coming from state as allProducts and category which we are looking for..
    const categories = getUniqueValues(allProducts, 'category')
    const companies = getUniqueValues(allProducts, "company")
   // console.log(colors)
    return (
        <Wrapper>
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* filter by search input */}
                    <div className="form-control">
                        <input type="text" name="text" placeholder="Search" className="search-input" value={text} onChange={filterByText}/>
                    </div>
                    {/* filter by category  */}
                    <div className="form-control">
                        <h5>Category</h5>
                        {categories.map((c, index) => {
                            return <button key={index} onClick={filterByText} type="button" name="category" className={`${category===c.toLowerCase()?"active":null}`}>{c}</button>
                        })}
                    </div>
                    {/* filter by company */}
                    <div className="form-control">
                        <h5>Company</h5>
                        <select name="company" className="company" onChange={filterByText} value={company}>
                            {companies.map((c, index) => {
                                return <option key={index} value={c}>{c}</option>
                           })}
                        </select>
                    </div>
                </form>
                <button type="button" className="clear-btn" onClick={clearFilter}>Clear Filter</button>
           </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-bottom:solid 4px crimson;
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .clear-btn:hover{
      background:#ff6347
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`
export default Filters
