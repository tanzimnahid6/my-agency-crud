const Modal = ({ setModalData }) => {
  return (
    <>
      <div id="my-modal-6" className="absolute  top-[20vh] z-20 left-96">
        <div className="modal-box bg-slate-400 w-full h-full relative">
          <label
            htmlFor="my-modal-6"
            onClick={() => setModalData(null)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="m-12">
            <h3 className="text-lg font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="my-4">
              You ve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
