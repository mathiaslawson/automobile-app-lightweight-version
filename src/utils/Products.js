import React from "react";

const products = [
  {
    id: 1,
    productName: "Product 1",
    imgUrl: "your_base_url_for_product_images/product1.jpg",
    category: "Category 1",
    price: 100,
    shortDesc: "Short description for product 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: 2,
    productName: "Product 2",
    imgUrl: "your_base_url_for_product_images/product2.jpg",
    category: "Category 2",
    price: 200,
    shortDesc: "Short description for product 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.3,
  },
  // Add more products here...
];

function Products() {
  return products.map((product) => (
    <div key={product.id}>
      <h2>{product.productName}</h2>
      <img src={product.imgUrl} alt={product.productName} />
      <p>{product.shortDesc}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Average Rating: {product.avgRating}</p>
    </div>
  ));
}

export default Products;