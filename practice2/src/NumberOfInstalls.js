import React from 'react';

export default class NumberOfInstalls extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }

    handleChange = () => {
        this.setState(prevState => {
            return {number: prevState.number + 1}
        })
    }

    render(){
        return (
            <div>
                {this.state.number} per installs
            </div>
        );
    }
}