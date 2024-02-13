
import React from 'react'; 


import * as ReactDOM from 'react-dom';


function Test() {

class Link extends React.Component{

    render(){

        return React.createElement('a', {href:'www.google.com'},'Read More Please ${this.props.framework}')
    }
}
    const name='rahul';

    const link1= React.createElement(Link,{framework: 'sadads'});
    const link2=React.createElement(Link);
    const link3=React.createElement('a',null,'Hello');
    const group= React.createElement(React.Fragment,null,link1,link2,link3);
    const domElement=document.getElementById('root');

   ReactDOM.render(group,domElement);

    return ( <div>

        <h1> Welcome to React Learning Component, {name} </h1> 

    </div>);
}



export default Test;