import BasketActionTypes from "./basket.types";
import { addItemToBasket, removeItemFromBasket } from "./basket.utils";

const INITIAL_STATE = {
  basketItems: [],
  hidden: true,
  item: [
    { id: 1, name: 'Strawberry', categoryId: 1 },
    { id: 2, name: 'Blueberry', categoryId: 1 },
    { id: 3, name: 'Orange', categoryId: 1 },
    { id: 4, name: 'Banana', categoryId: 1 },
    { id: 5, name: 'Apple', categoryId: 1 },

    { id: 6, name: 'Carrot', categoryId: 2 },
    { id: 7, name: 'Celery', categoryId: 2 },
    { id: 8, name: 'Mushroom', categoryId: 2 },
    { id: 9, name: 'Green Pepper', categoryId: 2 },

    { id: 10, name: 'Eggs', categoryId: 3 },
    { id: 11, name: 'Cheese', categoryId: 3 },
    { id: 12, name: 'Butter', categoryId: 3 },

    { id: 13, name: 'Chicken', categoryId: 4 },
    { id: 15, name: 'Pork', categoryId: 4 },
    { id: 16, name: 'Fish', categoryId: 4 },

    { id: 17, name: 'Rice', categoryId: 5 },
    { id: 18, name: 'Pasta', categoryId: 5 },
    { id: 19, name: 'Bread', categoryId: 5 }
  ],

};

const BasketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BasketActionTypes.TOGGLE_BASKET_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case BasketActionTypes.ADD_ITEM:
      return {
        ...state,
        basketItems: addItemToBasket(state.basketItems, action.payload),
      };
    case BasketActionTypes.REMOVE_ITEM:
      return {
        ...state,
        basketItems: removeItemFromBasket(state.basketItems, action.payload),
      };
    case BasketActionTypes.CLEAR_ITEM:
      return {
        ...state,
        basketItems: state.basketItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      case BasketActionTypes.CLEAR_BASKET:
        return{
          ...state,
          basketItems:[]
        }
    default:
      return state;
  }
};

export default BasketReducer;
