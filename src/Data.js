import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch(`https://crawler-micro.onrender.com/page/${currentPage}/size/${itemsPerPage}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      // Render paginated data
      <h1>List of Articles</h1>
      {currentItems.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.url}</p>
        </div>
      ))}
      // Render pagination controls
    </div>
  );
}

export default Data;

 