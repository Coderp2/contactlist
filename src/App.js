import './App.css';
import List from './components/List'
import Update from './components/Update';
import Add from './components/Add';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List/>,
  },
  {
    path: "/Update",
    element: <Update/>,
  },
  {
    path: "/Add",
    element: <Add/>,
  },
 
]);
function App() {

  return (
    <div className="App">
    <h1><span class="material-symbols-outlined">contacts</span>Contact-List
    </h1>
    <RouterProvider router={router} />  
    </div>
  );
}
export default App;
