// import axios from "axios";
// import {
//   createListFailure,
//   createListStart,
//   createListSuccess,
//   deleteListFailure,
//   deleteListStart,
//   deleteListSuccess,
//   getListsFailure,
//   getListsStart,
//   getListsSuccess,
// } from "./ListActions";


// const URL = "http://localhost:8000/api";

// export const getLists = async (dispatch) => {
//   dispatch(getListsStart());
//   try {
//     const res = await axios.get(`${URL}/question`, {
//       // headers: {
//       //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       // },
//     });
//     dispatch(getListsSuccess(res.data));
//   } catch (err) {
//     dispatch(getListsFailure());
//   }
// };

// //create
// export const createList = async (list, dispatch) => {
//   console.log(list);
//   dispatch(createListStart());
//   try {
//     const res = await axios.post(`${URL}/question`, list, {
//       // headers: {
//       //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       // },
//     });
//     dispatch(createListSuccess(res.data));
//   } catch (err) {
//     dispatch(createListFailure());
//   }
// };

// //delete
// export const deleteList = async (id, dispatch) => {
//   dispatch(deleteListStart());
//   try {
//     await axios.delete(`${URL}/lists/` + id, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(deleteListSuccess(id));
//   } catch (err) {
//     dispatch(deleteListFailure());
//   }
// };





import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";


const URL = "http://localhost:8000/api";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get(`${URL}/question`, {
      // headers: {
      //   token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      // },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (file, dispatch) => {
  console.log("kjdcjsdhbch");
  dispatch(createListStart());
  try {
    console.log("dndjhv");
    console.log(file);
    console.log("last");
    const res = await axios.post(`${URL}/question`,{file:file});
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

// delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete(`${URL}/lists/` + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
