import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import './index.css';
const App=()=>
{
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={()=><Home name="Home"/>}/>
            <Route exact path="/about" component={()=><About name="About"/>}/> 
            <Route exact path="/services" component={()=><Services name="Services"/>}/> 
            <Route exact path="/contact" component={()=><Contact name="Contact-Us"/>}/>
        </Switch>
        </>
    );
}
export default App;