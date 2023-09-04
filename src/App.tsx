import React, { useEffect } from 'react';
import ToastContainer, { toast } from './reactAwesomeToast/ReactToastify';

function App() {
  useEffect(() => {
    toast({title:"در حال کپی کردن.", type:"success", theme:"light", autoClose: 3000, callbackFunction: () => fetch("https://jsonplaceholder.typicode.com/todos/1")});
  },[])
  return (
    <div style={{ fontFamily:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
      <ToastContainer />
    </div>
  );
}

export default App;
