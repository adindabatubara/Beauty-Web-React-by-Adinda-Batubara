import React, {useState} from 'react';
import './App.css';
// import {LogIn} from './components/LogIn';
// import {Register} from './components/Register';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import AppRouter from './App.router';

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
}


// function App() {
//   // const adminUser={
//   //   email:"adinda@gmail.com",
//   //   password: 'adinda2998'
//   // }
//   const [currentForm, setCurrentForm] = useState ('login');

//   const toggleForce = (forName) => { 
//     setCurrentForm(forName);
//   }
  
//   return (
//     <>
//     <Navbar/>
//     <div className="App">
//       {
//         currentForm === 'login' ? <LogIn onFormSwitch={toggleForce} /> : <Register onFormSwitch={toggleForce} />
//       }
      
//     </div>
//     <Footer/>
//     </>
//   );
// }

export default App
