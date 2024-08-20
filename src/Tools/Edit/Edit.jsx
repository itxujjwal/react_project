import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Edit = () => {
  const _useNevigate = useNavigate();

  const [state, setState] = useState({
    full_name: "",
    email_id: "",
    mob_num: "",
  });
  const params = useParams();
  useEffect(() => {
    axios.get("http://localhost:3004/Contact/" + params.id).then((res) => {
      setState(res.data);
    });
  }, []);

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const updateRecord = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3004/Contact/" + params.id, state)
      .then((res) => {
        // toast.success("Record Updated Successfully");
        _useNevigate("/userlist"); //redirect to page
      });
  };

  const editData = () => {};
  return (
    <>
      <Toaster />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1 className="text-center">Update here !</h1>
            <form action="" onSubmit={updateRecord}>
              <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input
                  aria-describedby="emailHelp"
                  className="form-control"
                  id="exampleInputEmail1"
                  type="text"
                  name="f_name"
                  value={state.full_name}
                  onChange={handler}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  aria-describedby="emailHelp"
                  className="form-control"
                  id="exampleInputEmail1"
                  type="email"
                  name="email_id"
                  value={state.email_id}
                  onChange={handler}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="exampleInputPassword1">Mobile number</label>
                <input
                  className="form-control"
                  id="exampleInputPassword1"
                  type="phone"
                  name="mob_num"
                  value={state.mob_num}
                  onChange={handler}
                />
              </div>
              <button
                className="btn btn-success mt-2"
                type="submit"
                value="update"
                onClick={editData}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Edit;
