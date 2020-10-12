import React, { useState, useEffect } from "react";
import postStore from "../store/posts";

function ViewPosts() {
  const [posts, setposts] = useState(postStore.initialState);
  useEffect(() => {
    const subscription = postStore.subscribe(setposts);
    return function cleanUp() {
      subscription.unsubscribe();
    };
  });

  return posts.map((post, i) => <div key={i}>{post.title}</div>);
}

export default ViewPosts;
