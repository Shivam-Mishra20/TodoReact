 
import './App.css';
import TaskInput from './Components/Taskinput';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import TaskList from './Components/TaskList';

function App() {
  return (
   <>
<Provider store={store}>
   <div  className=' bg flex items-center justify-center min-h-[100vh] h-[100%] '>
      <div>
        <h1 className=' text-2xl text-green-400 text-center' >Todo App 📒 </h1>
        <TaskInput/>
        <TaskList/>
        


      </div>

   </div>
   </Provider>
   </>
  );
}

export default App;
