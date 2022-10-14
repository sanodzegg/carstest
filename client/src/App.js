import axios from "axios";

function App() {

  const get = async () => {
    const res = axios.get("https://carstest-ctzd.vercel.app/all");
    const data = await res;
    console.log(data);
  }

  return (
    <div className="App">
      <button onClick={get}>fetch</button>
    </div>
  );
}

export default App;
