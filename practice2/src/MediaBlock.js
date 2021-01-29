import React from 'react';
import './App.css';

export default class MediaBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            copied: false
        }
        this.copyText = this.copyText.bind(this);
    }

    componentDidMount(){
        const { value } = this.props.url;
        this.setState({ value });
    }


    copyText = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
    }

    render(){
        return(
            <div>
                <img src ={this.props.url} alt='' width='200px' height='400px'/>
                <div style={{display: 'block'}}>
                {
                document.queryCommandSupported('copy') &&
                <div>
                    <img src = 'https://image.flaticon.com/icons/png/512/25/25385.png' alt='' width='80px' className='copyDownload' style={{paddingRight: '10px'}}
                    onClick={this.copyText}/>
                </div>
                }
                    <a href={this.props.url} target='_blank' download>
                        <img src ='https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/download-512.png' alt='' width='80px' className='copyDownload'/>
                    </a>
                    
                    <form style={{display: 'block', width: '0px'}}>
                        <textarea  
                        ref={(textarea) => this.textArea = textarea} value = {this.props.url}></textarea>
                    </form>
                </div>
            </div>

)
    }
}