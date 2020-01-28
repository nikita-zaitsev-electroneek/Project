import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs.jsx';
import Profile from './components/Content/Profile/Profile.jsx';
import News from './components/Content/News/News.jsx';
import Music from './components/Content/Music/Music.jsx';
import Settings from './components/Content/Settings/Settings.jsx';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;