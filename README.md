# The Effect Hook

[Video](https://vimeo.com/928495786/8cc54a25f7?share=copy)

This guide explains how to use the `useEffect` hook in React to synchronize your component with external systems, such as tracking mouse movements on the screen. The `useEffect` hook is also used to perform actions on component mount and unmount, which is crucial for avoiding memory leaks and ensuring efficient resource use.

### Step 1: Setting Up State with `useState`
First, import `useState` and `useEffect` from React at the top of your component file:

```javascript
import { useState, useEffect } from 'react';
```

Then, initialize a state variable to track the mouse position. This variable will be an object containing `x` and `y` properties, both initially set to `0`:

```javascript
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
```

### Step 2: Using `useEffect` to Track Mouse Movement
Implement the `useEffect` hook to add an event listener for the mouse move event when the component mounts. Use a cleanup function within `useEffect` to remove the event listener when the component unmounts:

```javascript
useEffect(() => {
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  // Add event listener for mouse move
  document.addEventListener('mousemove', handleMouseMove);

  // Cleanup function to remove the event listener
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}, []);
```

In the `handleMouseMove` function, update the `mousePosition` state with the current mouse coordinates using `event.clientX` and `event.clientY`.

### Step 3: Displaying Mouse Coordinates
In your component's return statement, display the current mouse coordinates stored in the `mousePosition` state:

```javascript
return (
  <div>
    <h4>User Mouse Activity Tracker</h4>
    <p>Last mouse position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
  </div>
);
```

### Full Component Example
Combining all the steps, here's how your component should look:

```javascript
import { useState, useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h4>User Mouse Activity Tracker</h4>
      <p>Last mouse position: X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}

export default App;
```

### Conclusion
By following these steps, you have created a React component that tracks and displays the user's mouse position on the screen. This example demonstrates how to use the `useEffect` hook for side effects and resource management in your React components.