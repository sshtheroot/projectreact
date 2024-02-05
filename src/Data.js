import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch('https://crawler-micro.onrender.com/${id}')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
     
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'More Data'}
    </div>
  );
}

export default Data;
 
