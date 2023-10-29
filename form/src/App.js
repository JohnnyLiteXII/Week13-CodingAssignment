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
