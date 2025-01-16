import Add from "./Add.js";
import Substract from "./Substract.js";
import Multiply from "./Multiply.js";
import Divide from "./Divide.js"
import ResetInput from "./ResetInput.js";
import ResetResult from "./ResetResult.js";

function App() {
  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p></p>
      <Add />
      <Substract />
      <Multiply />
      <Divide />
      <ResetInput />
      <ResetResult />
    </div>
  );
}

export default App;
