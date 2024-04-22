import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Define the App component
const App = () => {
  return (
    // Render a div element with class "App"
    <div className="App">
      <h1>Now</h1>
      {/* Render a paragraph with class "App-intro" */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      {/* Render the ExampleComponent */}
      <ExampleComponent />
      {/* Render the TestComponent */}
      <TestComponent />
    </div>
  );
};

// Export the App component as the default export
export default App;
