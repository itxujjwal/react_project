import React, { useEffect, useState } from "react";
import "./userlist.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/Contact")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);
  const deleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios.delete(`http://localhost:3004/Contact/${id}`).then((res) => {
          // console.log(res.data);
        });
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3 mt-2">
              <h5 className="card-title">
                Contact List{" "}
                <span className="text-muted fw-normal ms-2">(834)</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3 mt-3">
              <div>
                <a href="/contact" className="btn btn-primary">
                  <i className="bx bx-plus me-1" /> Add New
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">MobNum</th>
                      <th scope="col" style={{ width: 200 }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <tr>
                        <td>{user.full_name}</td>
                        <td>{user.email_id}</td>
                        <td>{user.mob_num}</td>
                        <td>
                          <Link
                            className="btn btn-primary"
                            to={`/edit/${user.id}`}
                          >
                            Edit
                          </Link>{" "}
                          &nbsp;
                          <Link
                            className="btn btn-danger"
                            onClick={() => deleteData(user.id)}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li className="page-item disabled">
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Userlist;
