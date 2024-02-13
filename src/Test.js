
import React from 'react';

function Test() {


    const name='rahul';

    const title= React.createElement('h1',null,'Hello from ProjectReact');
    const link=React.createElement('a', {href:'www.google.com'},'Read More');
    const group= React.createElement('div',null,title,link);
    const domElement=document.getElementById('root');

    ReactDOM.render(group,domElement);

    return ( <div>

        <h1> Welcome to React Learning Component, {name} </h1> 

    </div>);
}



export default Test;