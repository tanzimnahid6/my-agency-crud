import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
    
        const {createUser  } = useContext(AuthContext)
    
        const handleLogin = (event)=>{
            event.preventDefault()
            const form = event.target 
            const email = form.email.value 
            const password = form.password.value 
            console.log({email,password});

             createUser (email,password)
             .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
              
              });

        
    
    
        }
      return (
        <div className=" my-8 md:h-[70vh]">
          <div className="block max-w-sm rounded-lg bg-lime-100 p-12 md:my-20 mx-auto ">
            <form onSubmit={handleLogin}>
              {/*E-mail input*/}
              <div className="relative mb-12" data-te-input-wrapper-init="">
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  className="w-full p-2"
                  
                />
               
              </div>
              {/*Password input*/}
              <div className="relative mb-6" data-te-input-wrapper-init="">
                <input
                  type="password"
                  name="password"
                  className="w-full p-2"
                  placeholder="Password"
                />
    
              </div>
              {/*Submit button*/}
              <button type="submit" className="btn btn-block btn-sm btn-info">
                Register
              </button> 
              <p className="text-center m-2">Are you Login ? please <Link className="text-blue-500" to='/login'>Login</Link> </p>
            </form>
          </div>
        </div>
      )
    
};

export default Register;