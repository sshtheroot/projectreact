 
 import axios from 'axios';
import React, { useState, useEffect } from 'react';
 
 
 const Data = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [products, setProducts] = useState([]);
 
   const fetchProducts = async (page) => {
     try {
       const response = await axios.get(`https://crawler-micro.onrender.com/page/${page}/size/10`, {
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": true,
          "Access-Control-Allow-Methods": "*"      
        }});
       const { products, totalPages } = response.data;
       setProducts(products);
       setTotalPages(totalPages);
     } catch (error) {
       console.log(error);
     }
   };
 
   useEffect(() => {
     fetchProducts(currentPage);
   }, [currentPage]);
 
   const handlePrevPage = () => {
     if (currentPage > 1) {
       setCurrentPage(currentPage- 1);
     }
   };
 
   const handleNextPage = () => {
     if (currentPage < totalPages) {
       setCurrentPage(currentPage + 1);
     }
   };
 
   return (
     <div>
       {/* Display the products */}
       <h3>List of Articles</h3>
       {products.map((product) => (
         <div key={product.id}>{product.title}</div>
       ))}
 
       {/* Pagination controls */}
       <button onClick={handlePrevPage} disabled={currentPage === 1}>
         Previous Page
       </button>
       <button onClick={handleNextPage} disabled={currentPage === totalPages}>
         Next Page
       </button>
     </div>
   );
 };
 
 export default Data;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

  