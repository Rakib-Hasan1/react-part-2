
import './App.css'
import Counter from './counter';
import Batsman from './Batsman';


function App() {

  const handleAlert = () => {
    alert("I am Clicked")
  }

  function handle2 (num) {
    const newNumber = num + 20;
    alert(newNumber)
  }


  return (
    <>



<Batsman></Batsman>




<br />
<br />
<br />
<br />
<br />
<Counter></Counter>










<button onClick={handleAlert}>Clik Me</button>
<button onClick={()=>handle2(2)}>Click Me 2</button>





    </>
  )
}

export default App
