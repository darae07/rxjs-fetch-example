const { from } = require("rxjs");
const axios = require("axios");
const { map, filter, tap, mergeMap } = require("rxjs/operators");

function fetch() {
  return from(axios.get("https://jsonplaceholder.typicode.com/posts")).pipe(
    map((res) => res.data)
  );
  //map(res=>));
}

const stream = fetch();
//stream.subscribe(console.log);
export default stream;
