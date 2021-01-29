import React, { useEffect, useState } from 'react';

export default function DBState(){
    const [imgs, setImgs] = useState([]);

    useEffect(() => {

    }, [imgs])
}


export default class DBState extends React.Component{
    render(){
        return(<h1>h1</h1>);
    }
}