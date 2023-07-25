import React from "react";
import ColorContext from "./ColorContext";

class ColorBox extends React.Component {
  // 이 컴포넌트에서 ColorContext에 접근할 수 있도록 contextType을 지정합니다.
  static contextType = ColorContext;

  render() {
    const { state } = this.context;

    return (
      <>
        <div
          style={{ width: "64px", height: "64px", background: state.color }}
        />
        <div
          style={{ width: "32px", height: "32px", background: state.subject }}
        />
      </>
    );
  }
}

export default ColorBox;
