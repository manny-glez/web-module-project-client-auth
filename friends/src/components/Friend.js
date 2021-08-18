import React from "react";

function Friend(props) {

  const { name } = props;

  // console.log(props)
  return (
    <>
    <div className="friend-card">
      <h2>{name}</h2>
    </div>
    </>
  )
}

export default Friend;