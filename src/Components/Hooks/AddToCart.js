import { toast } from 'react-toastify';

const AddtoCart = (product) => {
  let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const isItemInCart = storedCart.some((item) => item.name === product?.name);

  if (!isItemInCart) {
    //
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    toast.success("Item has been added to you cart");
  } else {
    //
    toast.error("Item has been added to you cart");
  }


 
};

export default AddtoCart;
