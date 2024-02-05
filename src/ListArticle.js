

const data=fetch('https://crawler-micro.onrender.com/Amazon')
.then(response => response.json())
.then(json => setData(json))
.catch(error => console.error(error));

export default function List() {
    const listItems = data.map(data =>
      <li>{data.title}</li>
    );
    return <ul>{listItems}</ul>;
  }