import React, {useContext} from 'react';
import { useEffect } from 'react';
import {GlobalContext} from '../utils/context';

export default ()=> {
    const {changeConfig}= useContext(GlobalContext);

    useEffect(()=>{
        changeConfig({showHeader:false, showFooter:false})
    },[changeConfig]);
    
    return (<h1 style={{background:'red'}}>
        <h1>I am the body</h1>
    </h1>)
}