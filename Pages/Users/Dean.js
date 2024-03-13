import React from 'react'

const Dean = () => {
    return (
        <div>
 <div className="container">
  <div className="left-side">
    <img src="back.jpeg" style={{width: 500, height: 'auto'}} />
  </div>
  <div className="right-side">
    <div className="form-group-6gd">
      <img src="head.jpg" style={{width: 460, height: 'auto'}} />
      <p className="text-2ii">
        <b>Enter your Details.</b>
      </p>
    </div>
    <div className="form-group-6gd">
      <form id="form" action="/">
        <div className="form-group-6gd">
          <label id="row1" htmlFor="Email">Email</label>
          <input id="ip1" type="email" placeholder="Email" className="form-control-6at" />
          <div className="error" />
        </div>
        <div className="form-group-6gd">
          <label>Password</label>
          <input id="Password" type="password" placeholder="Password" className="form-control-6at" />
          <div className="error" />
        </div>
        <button type="submit" className="btn-6pp btn-aci block-kf4">Log In</button>
      </form>
    </div>
  </div>
</div>
        </div>
    )
}

 
export default Dean;
