 



import React, { useState, useEffect } from 'react';

function Message() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://cloud-wor7.onrender.com/product/2')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading  Data...'}
    </div>
  );
}

export default Message;




























 