

const [data, setData] =  
    fetch('https://crawler-micro.onrender.com/Amazon')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
 

export default function List() {
    const listItems = data.map(data =>
      <li>{data}</li>
    );
    return <ul>{listItems}</ul>;
  }