import { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';

function ListArticle() {


    const [name, setName] = useState([]);


    useEffect(() => {
        names()
    }, [])


    const names = async () => {

        const response = await fetch('https://crawler-micro.onrender.com/Amazon');

        setName(await response.json())
    }

    return (

        <div>


            {
                name.map((data) => {

                    return (/* 
                        <ul className="list group list-group-named">
                            <li className="list-group=item"> {data.title}</li>
                            <p> <a href={data.url}>{data.url}</a> </p>



                        </ul> */

                        <Stack gap={3}>
                        <div className="p-2">{data.title}</div>
                        <div className="p-2">{data.url}</div> 
                      </Stack>
                    )
                })
            }

        </div>
    )



}

export default ListArticle;