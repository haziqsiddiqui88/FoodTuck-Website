
"use client";


import { useCart } from '../../../app/context/CartContext';
import Swal from 'sweetalert2';
const AddToCartButton = ({ food }: { food: { id: string; name: string; price: number; image: string } }) => {
  const { addToCart } = useCart();





  const handleAddToCart = () => {
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `Do you want to add ${food.name} to the cart? If yes, click OK`,
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
      
        addToCart({
          id: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
          quantity: 1,
        });
      }
    });
  };
  return (
    <button
      onClick={handleAddToCart}
      className="bg-[#ff9f0d] w-[120px] text-center h-[30px] rounded-md mt-2 hover:text-white hover:scale-105 transition-transform duration-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
