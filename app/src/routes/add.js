import React from 'react'
import Home from './Home';

export default class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgLink: {},
            allImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event){
        this.setState({imgLink: event.target.value, id: Date.now()})
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState((prevState) => ({
            allImgs: [prevState.imgLink, ...prevState.allImgs],
            imgLink: {}
          }));
    }

    handleDelete(taskIdToRemove){
        this.setState((prevState) => ({
            ...prevState, allImgs: prevState.allImgs.filter((task) => task.id !== taskIdToRemove)
        }))
    }

    render(){

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Image Link
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <Home all={this.state.allImgs} handleDelete={this.handleDelete} />
            </div>
        )
    }
}