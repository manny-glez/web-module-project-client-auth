import React, { useEffect, useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import Friend from "./Friend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        // console.log(res)
        setFriends(res.data)
      })
  }, [])

  return (
    <>
    <div className="friends-list">
      {friends.map(friend => {
        console.log(friend)
        return (
          <Friend name={friend.name} key={friend.id}/>
        )
      })}
    </div>
    </>
  )
}

export default FriendsList;