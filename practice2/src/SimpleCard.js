import React from 'react';
import NumberOfInstalls from './NumberOfInstalls';

export default class SimpleCard extends React.Component{
    render(){
        return(
        <div style={{display: 'block', margin: '10px'}}>
            <div style={{float: 'left', marginRight: '10px'}}>
                <Image url={this.props.item.imageUrl} />
            </div>
            <div>
                <Title text={this.props.item.title} />
                <br></br>
                <Installs />
            </div>
        </div>
        )
    }
}

class Image extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.url} alt="" width="100" length="100" />
            </div>
        )
    }
}

class Title extends React.Component{
    render(){
        return(
            <strong>{this.props.text}</strong>
        )
    }
}

class Installs extends React.Component{
    render(){
        return(
            <text style={{color: 'green'}}>{<NumberOfInstalls />}</text>
        )
    }
}