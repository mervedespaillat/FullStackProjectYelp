import { useEffect, useState } from 'react'
import './searchBar.css'
import {FaSearch} from "react-icons/fa"
import { fetchSearchShops } from '../../store/shops'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const SearchBar = () => {


      const history = useHistory();
      const [query, setQuery] = useState('');
  
      const handleKeyDown = e => {
          if (e.key === 'Enter') {
              handleClick();
          }
      }
  
      const handleClick = () => {
          (query === '') ? history.push(`/shops`) : history.push(`/search/${query}`);
          
          setQuery('');
      }
      useEffect(() => {
        
      }, [query])
  
    return(
        <>
      
        <div className='input-wrapper'>
            <input placeholder='Search by name or by city' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}></input>
            <button id="search-button" onClick={handleClick}>
                <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
            </button>
            {/* <FaSearch id='search-icon'></FaSearch> */}
        </div>

        </>

    )
}

export default SearchBar