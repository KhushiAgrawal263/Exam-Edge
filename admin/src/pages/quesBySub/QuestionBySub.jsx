import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";

export default function List() {
  const location = useLocation();
  const ques = location.state.questions;
  const sub = location.state.sub;
  console.log(ques);

  return (
    <>
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">{sub}</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

    {
      ques.map(function(g,i){
          
        return (

        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <span className="productName">Q.{i+1} {g.question}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">1</span>
                <span className="productInfoValue">{g.option1}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">2</span>
                <span className="productInfoValue">{g.option2}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">3</span>
                <span className="productInfoValue">{g.option3}</span>
              </div> 
              <div className="productInfoItem">
                <span className="productInfoKey">4</span>
                <span className="productInfoValue">{g.option4}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Answer</span>
                <span className="productInfoValue">{g.answer}</span>
              </div> 
            </div> 
          </div>
        </div>
        )
    })
    }
    </div>
    </>
  )
}
