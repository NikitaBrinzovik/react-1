import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kirill'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Kos'},
    {id: 6, name: 'Nikita'},
    {id: 7, name: 'Viktoria'},
    {id: 8, name: 'Polina'}
]

let messagesData = [
    {id: 1, text: 'privet', touched: 'no'},
    {id: 2, text: 'ne pichi mne bolche', touched: 'no'},
    {id: 3, text: 'kysay ego', touched: 'no'},
    {id: 4, text: 'nichego', touched: 'no'},
    {id: 5, text: 'poka', touched: 'no'},
    {id: 6, text: 'ffffffffffff', touched: 'no'}
]

let postsData = [
    {id: 1, message: 'Hi, how are you?', numb: 122},
    {id: 2, message: 'It\'s my first post', numb: 2},
    {id: 3, message: 'Sasha', numb: 22},
    {id: 4, message: 'Masha', numb: 3},
    {id: 5, message: 'Kos', numb: 1},
    {id: 6, message: 'Nikita', numb: 333},
    {id: 7, message: 'Viktoria', numb: 2},
    {id: 8, message: 'Polina', numb: 11}
]

ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


