import { useState } from "react";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState();
  return (
    <div className="SocialPosts">
      <PostForm />
      <PostInList />
    </div>
  );
};

export default SocialPosts;
