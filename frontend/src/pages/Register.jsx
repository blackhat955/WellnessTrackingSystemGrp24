// // import {React, useState} from 'react'
// // import { toast } from 'react-hot-toast'
// // import { useNavigate } from 'react-router-dom'
// // import axios from 'axios';


// // export default function Register() {

// //   const navigate = useNavigate()
// //   const [data, setData] = useState({
// //     name : '',
// //     email : '',
// //     password : '',
// //   })

// //   const registerUser = async(e) => {
// //     e.preventDefault();
// //     const {name, email, password} = data
// //     try {
// //       const {data} = await axios.post('/register', {
// //         name, email, password
// //       })
// //       if(data.error){
// //         toast.error(data.error)
// //       } else {
// //         setData({})
// //         toast.success('Login Successful. Welcome!')
// //         navigate('/login')
// //       }
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }

// //     return (
// //     <div>
// //         <form onSubmit={registerUser}>
// //             <label>Name</label>
// //             <input type='text' placeholder='Enter your Name here' value={data.name} onChange={(e) => setData({...data, name:e.target.value})}/>
// //             <label>Email</label>
// //             <input type='text' placeholder='Enter your Email here' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
// //             <label>Password</label>
// //             <input type='text' placeholder='Enter your Password here' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
// //             <button type='submit'>Submit</button>
// //         </form>
// //     </div>
// //   )
// // }

// import { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Register() {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   // const registerUser = async (e) => {
//   //   console.log(e.value.data)
//   //   e.preventDefault();
//   //   const { name, email, password } = data;
//   //   try {
//   //     const response = await axios.post('/register', { name, email, password });
//   //     if (response.data.error) {
//   //       toast.error(response.data.error);
//   //     } else {
//   //       setData({
//   //         name: '',
//   //         email: '',
//   //         password: ''
//   //       });
//   //       toast.success('Registration successful. Please log in!');
//   //       navigate('/login');
//   //     }
//   //   } catch (error) {
//   //     toast.error('An error occurred. Please try again later.');
//   //     console.error(error);
//   //   }
//   // };

//   const registerUser = async (e) => {
//     e.preventDefault();
//     try {
//       const { name, email, password } = data;
//       const response = await axios.post('/register', { name, email, password });
//       console.log(name)
//       if (response.data.error) {
//         toast.error(response.data.error);
//       } else {
//         setData({
//           name: '',
//           email: '',
//           password: ''
//         });
//         toast.success('Registration successful. Please log in!');
//         navigate('/login');
//       }
//     } catch (error) {
//       toast.error('An error occurred. Please try again later.');
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={registerUser}>
//         <label htmlFor="name">Name</label>
//         <input type="text" id="name" placeholder="Enter your Name here" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" placeholder="Enter your Email here" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
//         <label htmlFor="password">Password</label>
//         <input type="password" id="password" placeholder="Enter your Password here" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
