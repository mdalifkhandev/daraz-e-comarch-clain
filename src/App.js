import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routs } from './componant/routs-layout/routs/routs';

function App() {
  return (
    <div className='bg-white'>
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
