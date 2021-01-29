import React from 'react';
import MediaBlock from './MediaBlock';

export default class InformationBlock extends React.Component{
    render(){
        const media = this.props.item.map(item => <div style={{width: '210px', display: 'inline-block'}}><MediaBlock url={item}/> </div>);
        return(
            <div>
                {media}
            </div>
        )
    }
}