import React from "react";
import Table from "react-bootstrap/Table";

const ManageBorrowingRequests = () => {
  return (
    <div className="ManageBooks p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center">Manage Borrowing Requests</h3>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Book Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>@mdo</td>
            <td>Book1</td>
            <td>
              <button className="btn btn-sm btn-danger mx-2">Reject</button>
              <button className="btn btn-sm btn-info mx-2">Approve</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>@fat</td>
            <td>Book2</td>
            <td>
              <button className="btn btn-sm btn-danger mx-2">Reject</button>
              <button className="btn btn-sm btn-info mx-2">Approve</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBorrowingRequests;
