import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Profile from './components/profile/Profile';
import SideBar from './components/sidebar/SideBar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import MyPhoto from './components/MyPhoto/MyPhoto.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <SideBar />
            <div className='app-wrapper-content'>
                <Route path='/Dialogs' component={Dialogs}/>
                <Route exact path='/Profile' component={Profile}/>
                <Route path='/MyPhoto' component={MyPhoto}/>
                <Route path='/News' component={News}/>
                <Route path='/Settings' component={Settings}/>

            </div>


        </div>
        </BrowserRouter>);
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           HI-Nikita )) <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
