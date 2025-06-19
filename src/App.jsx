import { useState } from "react";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 class="text-3xl font-bold underline"> Tailwind CSS setup! </h1>
    </div>
  );
}

export default App;
