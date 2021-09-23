import React from 'react' ;

class Class1 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        return <div><h2>Class1 Comp created by { this.props.userName}</h2></div>
    }
}

export default Class1;