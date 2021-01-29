import React from 'react';
import '../App.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        var links = this.props.all;
        if(links !== undefined){
            var renderOut = links.map(link => <div><img src={link} alt="" onClick={this.props.handleDelete}/></div>)
        }
        return(
            <div>
                <div class="grid">
                    <div><img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip" alt="" onClick={this.props.handleDelete}/></div>
                    {renderOut}
                    
                    </div>
            </div>
        )
    }
}