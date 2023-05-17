import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"

const Header = () => {
  const { user, logOut,setUser } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("LogOut Successfully")
        setUser('')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="flex  bg-cyan-100 p-4 justify-between text-2xl font-bold px-8">
      <div><Link to='/'>Logo</Link></div>
      <div className="flex gap-4">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogOut}>
            <Link>Logout</Link>
          </button>
        ) : (
          <button>
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
