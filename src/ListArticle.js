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

return (

    <div>

        <ol className="list group list-group-named">
        {
            name.map((data) => {

                return (
                    // <li className = "list-group=item" key ={data.title} > { data.url}</li>

                 <ul>{data.title}</ul>,
                 <ul>{data.url}</ul>
                )
            })
        }

        </ol>
    </div>
)



}

export default ListArticle;