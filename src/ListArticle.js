import {useState, useEffect} from 'react';

function ListArticle(){


const[name,setName] = useState([]);


useEffect(()=> {
    names()
}, [])


const names= async() => {

    const response= await fetch('https://crawler-micro.onrender.com/Amazon');

    setName(await response.json())
}

 

   
     const listArticle= name.map((data) => 

                

                 <ul>{data.title}</ul>,
                 <ul>{data.url}</ul>
                )
  return <ul>{listArticle}</ul>



}

export default ListArticle;