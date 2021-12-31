import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/Form.jsx";

const App = () => {
  return (
    <div className="App">
     <h1 className="text-center mt-4">My to do list</h1>
     {/* <button className="btn btn-danger">Add To Do</button> */}
     <Form/>
    </div>
  );
}

export default App;
