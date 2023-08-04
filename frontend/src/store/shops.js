export const RECEIVE_SHOPS = "shops/RECEIVE_SHOPS";
export const RECEIVE_SHOP = "shops/RECEIVE_SHOP";
export const RECEIVE_LAST_SHOPS = "RECEIVE_LAST_SHOPS";
export const RECEIVE_SEARCH_SHOPS = "shops/RECEIVE_SEARCH_SHOPS";

export const receiveShops = (shops) => {
  return {
    type: RECEIVE_SHOPS,
    shops,
  };
};

export const receiveShop = (shop) => {
  return {
    type: RECEIVE_SHOP,
    shop,
  };
};

export const receiveLastShops = (shops) => {
  return {
    type: RECEIVE_LAST_SHOPS,
    shops,
  };
};

export const receiveSearchShops = (shops) => {
  return {
    type: RECEIVE_SEARCH_SHOPS,
    shops,
  };
};
// export const getShops = (state) => state.shops ? Object.values(state.shops) : []

export const getShops = (state) => {
  let result = [];
  if (state.shops) {
    return Object.values(state.shops);
  }
  return result;
};
export const getShop = (state) => {

  return state.shops ? state.shops.shop : null;
};

export const fetchShops = () => async (dispatch) => {
  const response = await fetch("/api/shops");
  if (response.ok) {
    const shops = await response.json();
    dispatch(receiveShops(shops));
  }
};

export const fetchShop = (shopId) => async (dispatch) => {
  const response = await fetch(`/api/shops/${shopId}`);
  if (response.ok) {
    const shopObj = await response.json();
    dispatch(receiveShop(shopObj));
  }
};

export const fetchShopLast = () => async (dispatch) => {
  const response = await fetch(`/api/recent3`);
  if (response.ok) {
    const shops = await response.json();
    dispatch(receiveLastShops(shops));
  }
};

export const fetchSearchShops = (search) => async (dispatch) => {
  const res = await fetch(`/api/shops/search?query=${search}`);
  const data = await res.json();
  dispatch(receiveSearchShops(data));
};

const shopsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_SHOPS:
      return { ...state, ...action.shops };
    case RECEIVE_SHOP:
      // newState[action.shop.id] = action.shop;
      return { ...state, ...action.shop };
    case RECEIVE_LAST_SHOPS:
      return { ...action.shops };
    case RECEIVE_SEARCH_SHOPS:
      return { ...action.shops };
    default:
      return state;
  }
};

export default shopsReducer;
