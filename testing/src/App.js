import './App.css';
import Todo from './components/todo/Todo';

function App() {
  const todos = [
    { id: 1, title: 'Eat food', completed: true },
    { id: 2, title: 'Run', completed: false }
  ]
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />
      })}
    </div>
  );
}

export default App;
