import { default as getPosts } from "../apis/getPosts";

const initialState = [];
const postStore = {
  subscribe: (setState) => getPosts.subscribe(setState),
  initialState,
};

export default postStore;
