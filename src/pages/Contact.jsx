// CHECKS TO SEE IF THE FORM IS FILLED OUT AND THEN ALERTS THE USER THAT THE MESSAGE WAS SUBMITTED
//IF NOT FILLED OUT, IT WILL NOT SUBMIT AND ALERT THE USER TO FILL OUT THE FORM


export default function Contact() {
  return (
    <div className="">
      <h1 className="text-center">Contact Me!</h1>
      <div className="d-flex justify-content-center  vh-100">
      <div className="p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input 
          type="text" 
          className="form-control form-control-lg" 
          id="contactName" 
          placeholder="John Doe" 
          title="This field is required"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address:</label>
          <input 
          type="email" 
          className="form-control form-control-lg" 
          id="contactEmail" 
          placeholder="JohnDoe@example.com" 
          title="This field is required"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea 
          className="form-control form-control-lg" 
          id="contactMessage" 
          rows="5" 
          placeholder="Enter a message here" 
          title="This field is required"
          ></textarea>
        </div>
        <div className="d-grid gap-2">
          <button 
          className="btn btn-primary" 
          onClick={() => alert("Your Message was submitted!")} 
          type="button"
          >
          Submit!
          </button>
        </div>
        </form>
      </div>
      </div>
    </div>
    );
}
