
import React from 'react'; 


import * as ReactDOM from 'react-dom';


function Test() {


    const name='rahul';

    const title= React.createElement('h1',null,'Hello from ProjectReact');
    const link=React.createElement('a', {href:'www.google.com'},'Read More');
    const group= React.createElement(React.Fragment,null,title,link);
    const domElement=document.getElementById('root');

   ReactDOM.render(group,domElement);

    return ( <div>

        <h1> Welcome to React Learning Component, {name} </h1> 

    </div>);
}



export default Test;