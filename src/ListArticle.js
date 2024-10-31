import { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';

function ListArticle() {


    const [name, setName] = useState([]);
    


    useEffect(() => {
        names()
    }, [])


    const names = async () => {

        const response = await fetch('https://crawler-microservice-latest.onrender.com',{search});

        setName(await response.json())
    }
 

    return (

        <div>

<form onSubmit={names}>
                <input type="text" placeholder="search" value={search} />
                
                <button type="submit">Search</button>
            </form>
            {
                name.map((data) => {

                    return (
                       
                            

                            <Stack gap={3}>
                                <div className="p-2">{data.title} <p> <a href={data.url}>{data.url}</a> </p></div>
                                
                            </Stack>

                    



                    )
                })
            }

        </div>
    )



}

export default ListArticle;