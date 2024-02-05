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

       
        {
            name.map((data) => {

                return (
                    <ul className="list group list-group-named">
                    <li className = "list-group=item"> { data.title}</li>
                    <li className = "list-group=item"> { data.url}</li>
                
        </ul>
                )
            })
        }

    </div>
)



}

export default ListArticle;