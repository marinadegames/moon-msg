import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let notesData = [
    { id: 1, text: 'Hi! How are you?', likes: 10},
    { id: 2, text: "this is my first post", likes: 123 },
    { id: 3, text: "Lor. Lorem Ipsum has beesio make a type specimen book.", likes: 356},
]

let messagesData = [
    { id: 1, text: 'Hi, how are you?' },
    { id: 2, text: "Hello, i'm fine, thanks" },
    { id: 3, text: "you ok?" },
    { id: 4, text: "Yes, i'm right" },
    { id: 5, text: "Good!" },
]
let dialogsData = [
    { id: 1, name: 'Eugene' },
    { id: 2, name: "Elina" },
    { id: 3, name: "Jack" },
    { id: 4, name: "Vlad" },
    { id: 5, name: "Mamka" },
]

ReactDOM.render(
  <React.StrictMode>
    <
        App
        notesData={notesData}
        messagesData={messagesData}
        dialogsData={dialogsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
