export const RECEIVE_SHOPS = 'shops/RECEIVE-SHOPS'
export const RECEIVE_SHOP = 'shops/RECEIVE-SHOP'
export const RECEIVE_LAST_SHOPS ='RECEIVE_LAST_SHOPS'

export const receiveShops = (shops) => {
    
    return {
        type: RECEIVE_SHOPS,
        shops
    }
}

export const receiveShop = (shop) => {
    return{
        type: RECEIVE_SHOP,
        shop
    }
}

export const receiveLastShops = (shops) => {
    return {
        type: RECEIVE_LAST_SHOPS,
        shops
    }
}
// export const getShops = (state) => state.shops ? Object.values(state.shops) : []

export const getShops = (state) => {
    let result = []
    if (state.shops){
        return Object.values(state.shops)
    }
    return result
}
export const getShop = (shopId) => (state) => state.shops ? state.shops[shopId] : null



export const fetchShops = () => async (dispatch) =>{
    const response = await fetch('/api/shops')
    if(response.ok){
        const shops = await response.json()
        dispatch(receiveShops(shops))
    }
}

export const fetchShop = (shopId) => async (dispatch) =>{
    const response = await fetch(`/api/shops/${shopId}`)
    if(response.ok){
        const shopObj = response.json()
        dispatch(receiveShop(shopObj));
    }
}

export const fetchShopLast = () => async (dispatch)=>{
    const response = await fetch(`/api/recent3`)
    if(response.ok){
        const shops = await response.json()
        dispatch(receiveLastShops(shops))
    }
}

const shopsReducer = (state={}, action) => {
    const newState = {...state}
    switch (action.type) {
        case RECEIVE_SHOPS: 
            return{...state, ...action.shops}
        case RECEIVE_SHOP:
            newState[action.shop.id] = action.shop
            return newState
        case RECEIVE_LAST_SHOPS:
            return{...action.shops} 
        default:
            return state;
    }
}

export default shopsReducer
