import React, { useState } from 'react';
import Thank from './Thank';
const Home = (props) => {
    const [show,setshow]=useState(false);
    const thank=()=>
    {
        setshow(true);
    }
    let dte=new Date().toLocaleTimeString();
    const [tate, newtate]=useState(dte);
    const date=()=>
    {
        dte=new Date().toLocaleTimeString();
        newtate(dte);
    }
    setInterval(date,1000);
    return (
        <>
        <br /><br /><br /><br /><br /><br />
            <center><h1>Hello!! Welcome To Our Website</h1></center>
            <center><h3>{tate}</h3></center>
            <center><button type="submit" onClick={thank}>Click Me</button></center>
            {show ? <Thank/> :null}
        </>
    );
}
export default Home;