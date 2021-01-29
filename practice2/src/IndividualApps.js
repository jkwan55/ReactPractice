import React from 'react';
import SimpleCard from './SimpleCard';
import InformationBlock from './InformationBlock';

export default class IndividualApps extends React.Component{
    render(){
        return(
            <div>
                <SimpleCard item={this.props.app}/>
                <div style={{clear: 'both'}}>
                    <InformationBlock item={this.props.app.media}/>
                </div>
                
            </div>

        )
    }
}