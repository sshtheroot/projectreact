import React, { useState, useEffect, useParams } from 'react';

function Data() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('https://crawler-micro.onrender.com/${id}')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
        <Input type="text" name="name" id="name"  />
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'More Data'}
    </div>
  );
}

export default Data;
