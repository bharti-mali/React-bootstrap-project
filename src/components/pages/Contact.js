import React from 'react'

const Contact = () => {
  return (
      <div>
        <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / Contact us</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container shadow my-10 py-5">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Enter your name.." aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Enter your Email.." aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" id="msg" placeholder="Write Subject here.." aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="3" id="des" placeholder="Description.."></textarea>
                </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-6 border-start">
              <h5 className="main-heading">Address Information</h5>
              <div className="underline"></div>
              <p>#xxx: abc, gujarat, india</p>
              <p>#phone: +112343545465</p>
              <p>#Email: dsadsf@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Contact
