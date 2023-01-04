import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Home  from '../routes/Home';
import Footer from './Footer';
import Navbar from './Navbar';

export const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();
  const [items, setItems] = useState({});

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('register-info'));
    if (items) {
     setItems(items);
    }


  }, []);


  const login = (e) => {
    e.preventDefault();
    console.log( email, pass);
    // const userData = {
    //   email,
    //   pass,
    // };
    // localStorage.setItem('login-info', JSON.stringify(userData));
    if ((email && pass) === (items.email && items.pass)){
      // navigate('/', {state: {nama: items.name, login: isLoggedin } })
      // history.push('/home', )

      setIsLoggedin(true);

    }

    console.log(items.email)
    // setEmail('');
    // setPass('');
  };
 
  const logout = () => {
    localStorage.removeItem('login-info');
    setIsLoggedin(false);
  };
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email,pass);
    
  }
  
  // const register = () => {

  //   navigate(`/register`);
  // };
  
  return (
    <>
    <Navbar/>
    <div className='auth-form-container App'>
        <h2>Sign In</h2>
      
    {!isLoggedin ? (
        <form className='login-form' onSubmit = {login}>
        <label for='email'>Email</label>
        <input required value={email} onChange={(e)=> setEmail(e.target.value)} type='email' id="email" name="email" />
        <label for='password'>Password</label>
        <input required value={pass} onChange={(e)=> setPass(e.target.value)} type='password'  id="password" name="password" />
        <button className='btn-log' type='submit'>Sign In</button>
        </form>
    ): (
      <Home login={isLoggedin}
      nama={items.name}/>
    )}

<a href='/register'>
<button className='link-btn'  >Don't have an account? Register here.</button>

</a>
    </div>
    <Footer />
    </>

  )

}

// import React, { Component } from 'react'
// export class LogIn extends Component {
//     // control from = value yang dihasilkan dari input ketika diganti akan di dikirim ke state 
//     state ={
//         field:{
//             name :'',
//             email : '',
//             password:''
//         },
//         errors:{
//             name :'',
//             email : '',
//             password:''
//         }
//     }

//     handleFormOnValidate = (name, value) => {

//         if(!value){
//             return 'Mohon isi Field'
//         }
//         if (name === 'name' && value.length < 3){
//             return 'nama terlalu terlalu pendek'
//         }
//         if (name === 'email' && !value.includes('@')){
//             return 'format email tidak sesuai'
//         }
//         if (name === 'password' && value.length < 8){
//             return 'password terlalu pendek'
//         }
//         return false
//     }

//     handleFromOnChange =(event)=>{
//         const {field, errors} = this.state
//         const {value, name}= event.target
//         const error = this.handleFormOnValidate(name, value)
//         this.setState({
//             field: {
//                 ...field,
//                 [name]: value
//             },
//             errors:{
//                 ...errors,
//                 [name]: error
//             }
//         })
//         return errors
//         // this.setState({[name]:value})
//     }

//     handleFromOnSubmit= (event) => {
//         event.preventDefault()
//         const validation = this.handleFormOnSubmitValidation()
//         const hasError = Object.values(validation).some((item) => item !== false)
//         if (hasError){
//             this.setState({errors: validation})
//             return
//         }
        
//         const {field} = this.state
//         console.log(field)
//     }

//     handleFormOnSubmitValidation = ()=>{
//         const {field} = this.state
//         const names = Object.keys(field) //Name,email,password
//         const errors = {}
//         names.forEach((name)=>{
//             const value = field[name]
//             const error = this.handleFormOnValidate(name, value)
//             errors[name] = error
          
//         })
//         return errors
//     }

//     render() {
//     // console.log(Render)
//     const {field , errors}= this.state
//     return (
//       <div>
//       <hr></hr>
//         <form onSubmit={this.handleFromOnSubmit}>
//              <div>
//                 <h1>Name</h1>
//                 <input 
//                     required
//                     type= "text"
//                     name= "name" 
//                     id="name"
//                     value={field.name}
//                     onChange={this.handleFromOnChange}
//                 />
//                 <p>{errors.name}</p>
//             </div>
//             <div>
//                 <h1>Email</h1>
//                 <input 
//                     required
//                     type="email"
//                     name="email"
//                     id="email"
                  
//                     value={field.email}
//                     onChange={this.handleFromOnChange}
//                 />
//                 <p>{errors.email}</p>
//             </div>
//             <div>
//                 <h1>Password</h1>
//                 <input 
//                     required
//                     minLength='8'
//                     type="password"
//                     name="password"
//                     id="password"
                   
//                     value={field.password}
//                     onChange={this.handleFromOnChange}
//                 />
//                 <p>{errors.password}</p>
//             </div>
//             <button type='submit'>Login</button>
//         </form>
//         <hr></hr>
//       </div>
    
//     )
//   }
// }

// export default LogIn