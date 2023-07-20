import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*
https://jsonplaceholder.typicode.com/todos/1
*/


function App() {
  const [data, setData] = useState("안녕하세요"); 

  const add =(a, b) => {
    return a+b;
  }
  const onClick = async () => {
    
    const sum = add(10,20); 

    //const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    //const jsonData = await response.json();
    

    //서버에서 자료를 얻어 설정하면 됨
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        } else {
         throw new Error('Something went wrong on api server!');
        }
      })
      .then(response => {
        setData(JSON.stringify(response));
        console.log("응답자료 문자열 : " + JSON.stringify(response));
      }).catch(error => {
        console.error(error);
      });

    setData("서버에서 데이터 얻어옴");

  };

  return (
    <div>
      data : {data} <br/>
      <button onClick={onClick}>불러오기</button>
    </div>
  );
}

export default App;
