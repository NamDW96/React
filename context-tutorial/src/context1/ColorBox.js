import React from "react";
import ColorContext from "./ColorContext";

/*
    ColorContext = createContext({color:'black'});
    //변수 선언 
*/

const ColorBox = () => {
  return (
    <>
      {" "}
      {/* context에서 정의된 값을 읽기 위해서는 Consumer tag를 사용하여 content영역에 callback 함수를 추가해서 처리한다 */}
      <tag attr="props가 되는거야">content 영역</tag>
      <ColorContext.Consumer>
        {(
          value //람다 함수, 콜백 함수 구현
        ) => (
          // ColorContext = createContext({color:'black'});
          // value =>  {color:'black'}
          <>
            <div
              style={{ width: "64px", height: "64px", background: value.color }}
            />
          </>
        )}
      </ColorContext.Consumer>
    </>
  );
};

export default ColorBox;
