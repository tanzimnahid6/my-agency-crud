

const Modal = ({ setModalData }) => {
    console.log('Nahid');
  
  return (
    <>
      <div id="my-modal-6" className="absolute  top-[20vh] z-20 left-96" >
        <div className="modal-box h-96 w-full max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You ve been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label onClick={() => setModalData(null)} htmlFor="my-modal-6" className="btn">
              Done!
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

