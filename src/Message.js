 



import React, { useState, useEffect } from 'react';

function Message() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://crawler-micro.onrender.com/Tech')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
   /*  <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading  Data... Please wait'}
    </div> */

    <div className="container">     
    <h1> Kist of articles </h1>  
 
    {JSON.map(item => (  
      <li>  
        {item.title}  
        {item.url}
      </li>  
     
    ))}  
 
</div>  
  );
}

export default Message;




























 