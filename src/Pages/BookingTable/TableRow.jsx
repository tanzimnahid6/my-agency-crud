import { Link } from "react-router-dom"



const TableRow = ({ serve, index, handleDelete,setModalData }) => {
   
  // console.log(serve);

  const { name, selectedFeature } = serve
  return (
    <>
     
      <tr className="border-2 m-3">
        <th>{index}</th>
        <td>{name}</td>
        <td>{selectedFeature}</td>
        <td>
          <div className="flex gap-4">
            <Link>
              <label onClick={()=>setModalData('Hello')} htmlFor="my-modal-6" className="btn btn-sm btn-info">
                Edit
              </label>
            </Link>

            <button
              
              onClick={() => handleDelete(serve._id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableRow
