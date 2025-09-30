import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routs } from './componant/routs-layout/routs/routs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-base-100 text-base-content'>
      <RouterProvider router={routs}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
