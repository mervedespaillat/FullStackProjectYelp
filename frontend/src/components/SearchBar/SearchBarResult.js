// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from "react-router-dom";
// import './SearchBarResult.css'
// import ShopIndexItem from '../shops/ShopIndexItem';
// import { fetchSearchShops } from '../../store/shops';

// const SearchBarResult = () => {
//     const { query } = useParams()
//     const dispatch = useDispatch();
//     const searchedShops = useSelector(state => state.shops)
//     const shopItem = Object.values(searchedShops).map(shop => <ShopIndexItem shop={shop} key={shop.id} link={`/shops${shop.relative_url}`}/>)

// console.log("search dosyasi")
//     useEffect(() => {
//         debugger
//         dispatch(fetchSearchShops(query))
//     }, [query])

    
//     const emptySearch = () => {
//         if ( Object.keys(searchedShops).length === 0 ) {
//             return (
//                 <div id="empty-search">
//                     <h2>No results for { query }</h2>
//                     <ul><span>Suggestions for improving your results:</span>
//                         <li>Check the spelling or try alternate spellings</li>
//                         <li>Try a more general search, e.g. "pizza" instead of "pepperoni"</li>
//                     </ul>

//                 </div>
//             )
//         }
//     }

//     return (
//         <>
//             { emptySearch() }
//             <ul id="shop-profile-container">
//                 {shopItem}
//             </ul>
//         </>
//     )

// }

// export default SearchBarResult;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './SearchBarResult.css';
import ShopIndexItem from '../shops/ShopIndexItem';
import { fetchSearchShops } from '../../store/shops';

// const SearchBarResult = () => {
//   const { query } = useParams();
//   const dispatch = useDispatch();
//   const searchedShops = useSelector(state => state.shops);
//   const history = useHistory();

//   useEffect(() => {
//     dispatch(fetchSearchShops(query));
//   }, [dispatch, query]);

//   const handleShopClick = shopId => {
//     history.push(`/shops/${shopId}`);
//   };

//   const shopItems = Object.values(searchedShops).map(shop => (
//     <ShopIndexItem
//     key={shop.id}
//     shop={shop}
//     onClick={() => handleShopClick(shop.id)}
//     />
//     ));
// const shopItems = Object.values(searchedShops).map((shopObj) => {
//  const shop = Object.values(shopObj)[0]; // Extract the shop object from the nested structure
//     return (
//       <ShopIndexItem
//         key={shop.id}
//         shop={shop}
//         onClick={() => handleShopClick(shop.id)}
//       />
//     );
//   });
    
//     console.log("burasi",searchedShops)
    
//     return (

//         <>
//         <div className='result-list'> 
//          <div id="shop-profile-container">{shopItems}</div>
//         </div>
//     </>
//   );
// };

const SearchBarResult = () => {
    const { query } = useParams();
    const dispatch = useDispatch();
    const searchedShops = useSelector((state) => state.shops);
  
    useEffect(() => {
      dispatch(fetchSearchShops(query));
    }, [dispatch, query]);
  
    // Check if the searchedShops object is valid and has the expected structure
    if (!searchedShops || !searchedShops.hasOwnProperty("0")) {
      return <div>No results found</div>;
    }
  
    const shopItem = Object.values(searchedShops["0"]).map((shop) => (
      <ShopIndexItem shop={shop} key={shop.id} />
    ));
  
    return (
      <>
        <ul id="shop-profile-container">{shopItem}</ul>
      </>
    );
  };
    

export default SearchBarResult;
