import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return <div>Github Followers: {data.followers} </div>;
};

export default Github;

export const githubUserInfo = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudary");
  return response.json();
};
