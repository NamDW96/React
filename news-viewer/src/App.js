import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";

/*
https://jsonplaceholder.typicode.com/todos/1
*/
function App() {
  // const [data, setData] = useState("안녕하세요");

  // const onClick = async () => {
  //   //서버에 자료를 얻어 설정하면 됨
  //   // const response = await fetch(
  //   //   "https://jsonplaceholder.typicode.com/todos/1"
  //   // );
  //   // const jsonData = await response.json();
  //   // setData(JSON.stringify(jsonData));

  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ae3df86896064a709c97f5898afccbc5"
  //     );
  //     setData(JSON.stringify(response.data));
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   //   .then(response => {
  //   //     console.log(response);
  //   //     if (response.status === 200) {
  //   //       return response.json();
  //   //     } else {
  //   //       throw new Error("Something went wrong on api server!");
  //   //     }
  //   //   })
  //   //   .then(response => {
  //   //     setData(JSON.stringify(response));
  //   //     console.log("응답자료 문자열 -> ", JSON.stringify(response));
  //   //   })
  //   //   .catch(error => {
  //   //     console.error(error);
  //   //   });
  // };

  const article = {
    title:
      "‘P의 거짓’, 소울라이크 본고장 일본서 오프라인 행사 개최한다 - 게임플",
    description:
      "[게임플] 네오위즈가 개발 중인 ‘P의 거짓’이 골드행을 기념해 일본에서 오프라인 이벤트 ‘P의 거짓 JAPAN PREMIUM’을 개최한다.P의 거짓은 동화 ‘피노키오’를 잔혹극으로 각색한 액션 RPG다. '크라트라'라는 가상 도시와 '화석병'을 소재로 동화 속 피노키오의 모험을 영리하게 비튼 스토리와 유럽 ‘벨 에포크’ 시대 분위기의 아트워크, 프롬소프트웨어의 ‘소울’ 시리즈를 연상시키는 난도 높은 전투가 특징이다.이번 행사는 P의 거짓의 골드행을 기념하기 …",
    url: "http://www.gameple.co.kr/news/articleView.html?idxno=206552",
    urlToImage:
      "http://cdn.gameple.co.kr/news/thumbnail/202307/206552_215715_757_v150.jpg",
  };

  const articles = [article, article, article, article];

  return (
    <div>
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
