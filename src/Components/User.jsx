import { useEffect, useState } from "react";
import { PrintData } from "./PrintData";
import axios from "axios";
export const User = () => {
  const [posts, setPost] = useState("");
  const getdata = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPost(data.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      {posts == "" ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <PrintData item={posts} />
        </div>
      )}
    </>
  );
};
