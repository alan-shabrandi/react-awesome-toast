import React, { useEffect } from 'react';
import ToastContainer, { toast } from './reactAwesomeToast/ReactToast';

function App() {
  useEffect(() => {
    toast({title:"در حال کپی کردن.", type:"success", theme:"light", autoClose: false, callbackFunction: () => alert("hello")});
  },[])
  return (
    <div style={{ fontFamily:'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
      <ToastContainer />
    </div>
  );
}

export default App;
