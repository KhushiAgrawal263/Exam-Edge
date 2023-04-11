import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";

export default function Students() {
  const location = useLocation();
  const student = location.state.student;

  const newDate = student.createdAt;
  const d = new Date( newDate);
  const date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Student</h1>
        {/* <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{student.firstname} {student.lastname}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">{student.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Email Id:</span>
              <span className="productInfoValue">{student.emailId}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">Date Of Birth:</span>
              <span className="productInfoValue">{student.dob}</span>
            </div> */}
            <div className="productInfoItem">
              <span className="productInfoKey">Gender:</span>
              <span className="productInfoValue">{student.gender}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Address:</span>
              <span className="productInfoValue">{student.address}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">contact No.:</span>
              <span className="productInfoValue">{student.contactNo}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Registered On:</span>
              <span className="productInfoValue">{date}</span>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <span className="productName">Subjects And Marks</span>
            </div>
            <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">Operating System:</span>
                <span className="productInfoValue">{student.marks.Os}</span>
              </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Theory Of Computation:</span>
                <span className="productInfoValue">{student.marks.Toc}</span>
              </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Database Management System:</span>
                <span className="productInfoValue">{student.marks.Dbms}</span>
              </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Computer Network:</span>
                <span className="productInfoValue">{student.marks.Cn}</span>
              </div>
            <div className="productInfoItem">
                <span className="productInfoKey">Data Structure And Algorithm:</span>
                <span className="productInfoValue">{student.marks.Dsa}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="productTop">
          <div className="productTopRight">
          <div className="productInfoTop">
              <span className="productName">Result</span>
            </div>
            <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">Result:</span>
                <span className="productInfoValue">{student.result}</span>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}
