/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const BasketContext = createContext(null);

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const idx = prevBasket.findIndex((q) => q.id === product.id);

      if (idx === -1) {
        return [...prevBasket, { ...product, quantity: 1 }];
      }

      return prevBasket.map((item, index) =>
        index === idx
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const removeBasketItem = (id) => {
    setBasket((prevBasket) => prevBasket.filter((q) => q.id !== id));
  };

  const increaseBasketCount = (id) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseBasketCount = (id) => {
    setBasket((prevBasket) =>
      prevBasket
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const calculateTotalPrice = () => {
    return basket
      .reduce((sum, curr) => sum + curr.price * curr.quantity, 0)
      .toFixed(2);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeBasketItem,
        increaseBasketCount,
        decreaseBasketCount,
        clearBasket,
        calculateTotalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
