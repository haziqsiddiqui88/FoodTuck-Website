// utils/actions.ts

export const getCartItems = () => {
    try {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.error("Error fetching cart items:", error);
      return [];
    }
  };
  