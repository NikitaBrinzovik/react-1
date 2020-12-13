import './App.css';

const App = () => {
  return (
  <div>
    <TeastHeader />
    <Technologiest />    
  </div>
  );
}

const TeastHeader = () => {
  return (<div>
    <a href='#s'>wow, look at me!</a> 
   {/* href='#s' - сделать ссылкой */}
    </div>);
}

const Technologiest = () => {
  return (
    <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
  );
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
