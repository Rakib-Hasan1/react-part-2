import "./App.css";
import Counter from "./counter";
import Batsman from "./Batsman";
// import Users from "./summary";
import { Suspense } from "react";
import Friends from "./friends";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json());


  const fetchFriends = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json(); 
  }



function App() {


  const friendsPromise = fetchFriends();





  const handleAlert = () => {
    alert("I am Clicked");
  };

  function handle2(num) {
    const newNumber = num + 20;
    alert(newNumber);
  }

  return (
    <>
      {/* <Suspense fallback={<h3>Loading ...</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}



      <Suspense fallback={<h3>Friends are comming for treats...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Batsman></Batsman>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Counter></Counter>

      <button onClick={handleAlert}>Clik Me</button>
      <button onClick={() => handle2(2)}>Click Me 2</button>
    </>
  );
}

export default App;
