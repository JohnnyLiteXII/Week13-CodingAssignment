/*-- Copyright (c) 2023 Promineo Tech 

Author:  Juan Mejia

Week 13 - Coding Assignment

----------------------------------------------------

Coding Steps:
Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
- Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
Create a Navigation component that contains links styled like a navbar.
- The links don't have to go anywhere.
Put the Navigation component at the top of the page and the LoginForm in the center of the page.
*/

import './App.css';          // Import the global CSS file for styling

import Navbar from './components/Navbar.js';      // Import the Navbar component
import LoginForm from './components/LoginForm.js';  // Import the LoginForm component
import Footer from './components/Footer.js';      // Import the Footer component

function App() {
  return (
    <div className="App">  {/* Create a container div with the CSS class "App" */}
      <Navbar />           {/* Render the Navbar component */}
      <LoginForm />        {/* Render the LoginForm component */}
      <Footer />           {/* Render the Footer component */}
    </div>
  );
}

export default App;       // Export the App component as the default export


