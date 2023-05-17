import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import TableRow from "./TableRow"
import Modal from "../Modal/Modal"

const Bookings = () => {
  const [modaldata, setModalData] = useState(null)
  const { user } = useContext(AuthContext)
  const [userBookings, setUserBookings] = useState([])
  const email = user.email
  const url = `http://localhost:5000/bookings/${email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserBookings(data))
  }, [url])

  //function delete a data=====
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = userBookings.filter((booking) => booking._id !== id)
          setUserBookings(remaining)
        }
      })
  }

  return (
    <div>
      {modaldata && <Modal setModalData={setModalData}></Modal>}
      <div className="overflow-x-auto my-4">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Agency Name</th>
              <th>selected Feature</th>
            </tr>
          </thead>
          <tbody>
            {userBookings.map((serve, index) => (
              <TableRow
                setModalData={setModalData}
                handleDelete={handleDelete}
                serve={serve}
                index={index + 1}
                key={serve._id}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings
