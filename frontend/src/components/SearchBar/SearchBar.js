import './searchBar.css'
const SearchBar = () => {

    return(
        <>
        <div className='search'>
        <div className="search-bar-shop">
            <input type="search" placeholder="name of shop"/>
        </div>
        <div className="search-bar-city">
            <input type="text" placeholder="city"></input>
        </div>
        </div>

        </>

    )
}

export default SearchBar