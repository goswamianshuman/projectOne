import React, { useState } from "react";

function Login(props) {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    cnf_password: "",
  });
  
  const formSubmit = (e) => {
    e.preventDefault();
    alert("you have created account succesfully");
    console.log(data);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Sign-up</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}></form>
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name=""
                  value={data.fullname}
                  onChange={(e) => setData({ fullname: e.target.value })}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name=""
                  value={data.email}
                  onChange={(e) => setData({ email: e.target.value })}
                  placeholder="email address"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name=""
                  value={data.password}
                  onChange={(e) => setData({ password: e.target.value })}
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name=""
                  value={data.cnf_password}
                  onChange={(e) => setData({ cnf_password: e.target.value })}
                  placeholder="Conform Password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline btn-success mb-3"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
