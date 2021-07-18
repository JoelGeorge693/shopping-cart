export const addItemToBasket = (basketItems, itemToAdd) => {
    const itemExists = basketItems.find((basketItem) => basketItem.id === itemToAdd.id);

    if (itemExists) {
      return basketItems.map((basketItem) =>
        basketItem.id === itemToAdd.id
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem
      );
    }
  
    return [...basketItems, { ...itemToAdd, quantity: 1 }];
  };
  
  export const removeItemFromBasket = (basketItems, itemToRemove) => {
    const existingbasketItem = basketItems.find(
      (basketItem) => basketItem.id === itemToRemove.id
    );
  
    if (existingbasketItem.quantity === 1) {
      return basketItems.filter((basketItem) => basketItem.id !== itemToRemove.id);
    }
  
    return basketItems.map((basketItem) =>
      basketItem.id === itemToRemove.id
        ? { ...basketItem, quantity: basketItem.quantity - 1 }
        : basketItem
    );
  };