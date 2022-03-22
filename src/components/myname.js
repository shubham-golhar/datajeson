import React from "react";

export default function MyName(props) {
  return <div key={props.index}>My name is {props.name} </div>;
}
<MyName />;
