import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://cloud-wor7.onrender.com')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'More Data'}
    </div>
  );
}

export default Data;
