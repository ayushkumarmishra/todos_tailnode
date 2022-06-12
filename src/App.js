import "./App.css";
import Header from "./component/Header";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { TasklistContextProvider } from "./context/Tasklist";
function App() {
  return (
    <TasklistContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TasklistContextProvider>
  );
}

export default App;
