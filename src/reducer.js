export const initialState = {
  basket: [
    {
      id: "50PUT7605/94",
      title: "APPLE iPhone 12 Mini (White, 64 GB) 12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording",
      price: 2530,
      rating: 4,
      image: 'https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70'
    },
    {
      id: "50PUT7605/94",
      title: "APPLE iPhone 12 Mini (White, 64 GB) 12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording",
      price: 2530,
      rating: 4,
      image: 'https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70'
    },
  ],
  user: null,

};
const reducer = (state, action) => {

  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      if (index >= 0) {

      }
      else {
        console.warn("cant remove product (id:" + ${ action.id } + ")as it is not available")
      };

      return { ...state };
    default:
      return state;
  }
};

export default reducer;