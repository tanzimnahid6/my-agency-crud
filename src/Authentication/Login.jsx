import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Login = () => {
  const { setUser, signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname
  const path = from || "/"

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUser(user)
        navigate(path, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }
  return (
    <div className="h-[80vh]">
      <div className="block max-w-sm rounded-lg bg-lime-100 p-12 my-20 mx-auto ">
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
           Login
          </button>
          <p className="text-center m-2">
            Are you Registered ? please{" "}
            <Link className="text-blue-500" to="/register">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
