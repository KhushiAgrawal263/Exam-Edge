// import { useContext, useState, useRef } from "react";
// import "./newMovie.css";
// import storage from "../../firebase";
// import { createMovie } from "../../context/studentContext/apiCalls";
// import { MovieContext } from "../../context/studentContext/StudentContext";
// import { ListContext } from "../../context/listContext/ListContext";
// import { createList } from "../../context/listContext/apiCalls";
// import { useHistory } from "react-router-dom";

// export default function NewMovie() {
//   // const [movie, setMovie] = useState(null);
//   const [list, setList] = useState(null);
//   const aref = useRef();
//   const bref = useRef();
//   const cref = useRef();
//   const dref = useRef();
//   const eref = useRef();
//   const fref = useRef();
//   const gref = useRef();
//   const history = useHistory()

//   const { dispatch } = useContext(ListContext);
//   // const [img, setImg] = useState(null);
//   // const [imgTitle, setImgTitle] = useState(null);
//   // const [imgSm, setImgSm] = useState(null);
//   // const [trailer, setTrailer] = useState(null);
//   // const [video, setVideo] = useState(null);
//   // const [uploaded, setUploaded] = useState(0);

//   // const { dispatch } = useContext(MovieContext);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setList({ ...list, [e.target.name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createList(list, dispatch);
//     // this.myFormRef.reset();
//     // aref.current.value="";
//     // bref.current.value="";
//     // cref.current.value="";
//     // dref.current.value="";
//     // eref.current.value="";
//     // fref.current.value="";
//     // gref.current.value="";
//     window.location.reload(true);
//   };

//   return (
//     <div className="newProduct"  >
//       <h1 className="addProductTitle">Add Question</h1>
//       <form className="addProductForm">
//         <div className="addProductItem">
//           <label>Subject</label>
//           <select name="subject" onChange={handleChange} ref={aref} >
//             <option value="Select Subject" >Select Subject</option>
//             <option value="Operating System">Operating System</option>
//             <option value="Theory Of Computation">Theory Of Computation</option>
//             <option value="Database Management System">Database Management System</option>
//             <option value="Computer Network">Computer Network</option>
//             <option value="Data Structure And Algorithm">Data Structure And Algorithm</option>
//           </select>
//           {/* <input
//             type="text" ref={aref}
//             placeholder="subject"
//             name="subject" autoComplete="off"
//             onChange={handleChange}
//           /> */}
//         </div>
//         <div className="addProductItem">
//           <label>Question</label>
//           <input
//             type="text" ref={bref}
//             placeholder="question"
//             name="question" autoComplete="off"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Option 1</label>
//           <input
//             type="text" ref={cref}
//             placeholder="option1"
//             name="option1" autoComplete="off"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Option 2</label>
//           <input
//             type="text" ref={dref}
//             placeholder="option2"
//             name="option2" autoComplete="off"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Option 3</label>
//           <input
//             type="text" ref={eref}
//             placeholder="option3"
//             name="option3" autoComplete="off"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Option 4</label>
//           <input
//             type="text" ref={fref}
//             placeholder="option4"
//             name="option4" autoComplete="off"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Correct Answer</label>
//           <input
//             type="text" ref={dref}
//             placeholder="correct Answer"
//             name="answer" autoComplete="off"
//             onChange={handleChange}
//           />
//         </div>
//         <button className="addProductButton" onClick={handleSubmit}>
//             Create
//           </button>
//       </form>
//     </div>
//   );
// }

import { useContext, useState, useRef } from "react";
import "./newMovie.css";
import storage from "../../firebase";
import { createMovie } from "../../context/studentContext/apiCalls";
import { MovieContext } from "../../context/studentContext/StudentContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";
const fs = require("fs");
export default function NewMovie() {
  // const [movie, setMovie] = useState(null);
  const [sub, setSub] = useState(null);
  const [file, setFile] = useState();
  const aref = useRef();
  const bref = useRef();
  const cref = useRef();
  const dref = useRef();
  const eref = useRef();
  const fref = useRef();
  const gref = useRef();
  const history = useHistory()

  const { dispatch } = useContext(ListContext);
  // const [img, setImg] = useState(null);
  // const [imgTitle, setImgTitle] = useState(null);
  // const [imgSm, setImgSm] = useState(null);
  // const [trailer, setTrailer] = useState(null);
  // const [video, setVideo] = useState(null);
  // const [uploaded, setUploaded] = useState(0);

  // const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    // setFile(e.target.files[0])
    // setFile(e.target._wrapperState.files[0]);
    // console.log("file uploadddddddd");
    // console.log(e);
    const value = e.target.value;
    console.log(value);
    setSub(value);
  };

  const handleChangefile = (e) => {
    // console.log(e.target.files);
    // var reader = new FileReader();
    // reader.onload = onReaderLoad;
    // reader.readAsText(e.target.files[0]);
    // function onReaderLoad(event){
    //   // setFile(event.target.result);
    //   setFile(event.target)
    // }
  setFile(e.target.files[0].name);
  // function alert_data(name, family){
  //     alert('Name : ' + name + ', Family : ' + family);
  // }
    // console.log("khushi");
    // console.log(e);
    // setFile(e.target.files[0]);
    // console.log("hyyyyyyyyyyyyyy");
  };

  const handleSubmitFile=(e)=>{
    e.preventDefault();
    console.log("agrawal");
    console.log(file);
    console.log("isha");
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("khsuhi");
    // console.log(file);
    createList(file, dispatch);
    alert("Data imported successfully");
    // window.location.reload(true);
  };

  return (
    <div className="newProduct"  >
      <h1 className="addProductTitle">Add Question</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Subject</label>
          <select name="subject" onChange={handleChange} ref={aref} >
            <option value="Select Subject" >Select Subject</option>
            <option value="Operating System">Operating System</option>
            <option value="Theory Of Computation">Theory Of Computation</option>
            <option value="Database Management System">Database Management System</option>
            <option value="Computer Network">Computer Network</option>
            <option value="Data Structure And Algorithm">Data Structure And Algorithm</option>
          </select>
          {/* <input
            type="text" ref={aref}
            placeholder="subject"
            name="subject" autoComplete="off"
            onChange={handleChange}
          /> */}
        </div>
         {/* <div className="addProductItem">
          <label>Question</label>
          <input
            type="text" ref={bref}
            placeholder="question"
            name="question" autoComplete="off"
            onChange={handleChange} 
          />
        </div> 
        <div className="addProductItem">
          <label>Option 1</label>
          <input
            type="text" ref={cref}
            placeholder="option1"
            name="option1" autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Option 2</label>
          <input
            type="text" ref={dref}
            placeholder="option2"
            name="option2" autoComplete="off"
            onChange={handleChange}
          /> */}
        {/* </div> */}
        {/* <div className="addProductItem">
          <form >
            <label>Add File</label>
            <input type="file" onChange={handleChangefile} />
            <button className="addProductButton" onClick={handleSubmitFile} type="submit">Upload</button>
          </form>
        </div> */}
        <div className="addProductItem">
          <form action="fileupload" method="post" enctype="multipart/form-data" >
            <label>Add File</label>
            <input type="file" onChange={handleChangefile} />
            <button className="addProductButton" onClick={handleSubmitFile} type="submit">Upload</button>
          </form>
        </div>
        {/* <div className="addProductItem">
          <label>Option 3</label>
          <input
            type="text" ref={eref}
            placeholder="option3"
            name="option3" autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Option 4</label>
          <input
            type="text" ref={fref}
            placeholder="option4"
            name="option4" autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Correct Answer</label>
          <input
            type="text" ref={dref}
            placeholder="correct Answer"
            name="answer" autoComplete="off"
            onChange={handleChange}
          />
        </div> */}
        <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
      </form>
    </div>
  );
}

