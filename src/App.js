import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routs } from './componant/routs-layout/routs/routs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-white'>
      <RouterProvider router={routs}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
