import "./studentList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/studentContext/StudentContext";
import { deleteMovie, getMovies } from "../../context/studentContext/apiCalls";

export default function Students() {
  const { students, dispatch } = useContext(MovieContext);
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "student",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        console.log(params.row);
        return (
          <div className="productListItem">
            <img  alt="" />
            {params.row.firstname} {params.row.lastname}
          </div>
        );
      },
    },
    { field: "address", headerName: "Address", width: 120 },
    { field: "contactNo", headerName: "Contact No.", width: 120 },
    { field: "emailId", headerName: "Email Id", width: 120 },
    { field: "password", headerName: "Password", width: 120 },
    { field: "createdAt", headerName: "Registered On", width: 120,
    renderCell: (params) => {
      const year=new Intl.DateTimeFormat('en-GB', {
        year: 'numeric'
      }).format(params.createdAt)
      const month=new Intl.DateTimeFormat('en-GB', {
        month: "long"
      }).format(params.createdAt)
      const date=new Intl.DateTimeFormat('en-GB', {
        day: "2-digit"
      }).format(params.createdAt)
      return (
        <div className="productListItem">
          {date}-{month}-{year}
        </div>
      );
    },
   },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/movie/" + params.row._id,
                state: { student: params.row },
              }}
            >
              <button className="productListEdit">View</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={students}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
