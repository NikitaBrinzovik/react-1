import React, {Component} from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile';
import SideBar from './components/sidebar/SideBar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import MyPhoto from './components/MyPhoto/MyPhoto.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import Friends from './components/Friends/Friends';
import {Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <SideBar/>
            <div className='app-wrapper-content'>
                <Route path='/Dialogs'
                       render={() => <Dialogs state={props.appState.dialogsPage}/>}/>
                <Route path='/Profile'
                       render={() => <Profile state={props.appState.profilePage}/>}/>
                <Route path='/MyPhoto' render={() => <MyPhoto/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/Friends' render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
