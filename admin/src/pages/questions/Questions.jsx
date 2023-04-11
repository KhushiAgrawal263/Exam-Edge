import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { deleteList, getLists } from "../../context/listContext/apiCalls";

export default function ListList() {
  const history = useHistory();
  console.log("hiii");
  const viewHandler=async (val)=>{
    console.log(val);
    const URL = "http://localhost:8000/api";
    try {
      const res = await axios.get(`${URL}/question/${val}`);
      console.log("buyyy");
      const questions = res.data;
      history.push({ 
        pathname: `/question/" + ${val}`,
        state: {questions:questions,sub:val}
       });
    } catch (err) {
      console.log(err);
    }

  }
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Subjects</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            {/* <span className="productName">{student.firstname} {student.lastname}</span> */}
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Operating System</span>
              <div className="productInfoValue">
                <button className="productListEdit" onClick={()=>{viewHandler("Operating System")}} >View</button>
              </div>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Theory Of Computation</span>
              <div className="productInfoValue">
                <Link to={{ pathname: "/question/" + "Theory Of Computation"}}>
                    <button className="productListEdit" onClick={()=>{viewHandler("Theory Of Computation")}}>View</button>
                </Link>
              </div>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Database Management System</span>
              <div className="productInfoValue">
                <Link to={{ pathname: "/question/" + "Database Management System"}}>
                    <button className="productListEdit" onClick={()=>{viewHandler("Database Management System")}}>View</button>
                </Link>
              </div>
            </div>                                                                                                                                                                                                                      
            <div className="productInfoItem">
              <span className="productInfoKey">Computer Network</span>
              <div className="productInfoValue">
                <Link to={{ pathname: "/question/" + "Computer Network"}}>
                    <button className="productListEdit" onClick={()=>{viewHandler("Computer Network")}}>View</button>
                </Link>
              </div>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Data Structure And Algorithm</span>
              <div className="productInfoValue">
                <Link to={{ pathname: "/question/" + "Data Structure And Algorithm"}}>
                    <button className="productListEdit" onClick={()=>{viewHandler("Data Structure & Algorithm")}}>View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
