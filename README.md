# react-awesome-toast

✔ React-Awesome-Toast allows you to add notifications to your react app

## Installation

```
$ npm install --save react-awesome-toast
$ yarn add react-awesome-toast

```

## Features

- Installing and using this package is very simple
- Define behavior per toast
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- Dark 🌒 and light ☀ mode 
- Ability to set the duration of toast display
- Determinig where to display the toast, you can set four positions: top-right | top-left | bottom-right | bottom-left
- types: success | warning | error | promise
- And much more !

## Example

```jsx
  import React from 'react';

  import { ToastContainer, toast } from 'react-awesome-toast';
  
  const App = () => {

    const handleShowToast = () => toast({title:"react-awesome-toast",type:"success"})

    return (
      <div>
        <button onClick={handleShowToast}>Show Toast</button>
        <ToastContainer />
      </div>
    );
  }
```
## License

Licensed under MIT
