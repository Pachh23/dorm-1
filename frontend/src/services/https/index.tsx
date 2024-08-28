import { StudentInterface } from "../../interfaces/IUser";
//import { AdminInterface } from "../../interfaces/Admin";
import { SignInInterface } from "../../interfaces/SignIn";
import { SignInAdminInterface } from "../../interfaces/SignInAdmin";
import axios from "axios";
const apiUrl = "http://localhost:8000";
const Authorization = localStorage.getItem("token");
const Bearer = localStorage.getItem("token_type");
const requestOptions = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `${Bearer} ${Authorization}`,
  },
};
async function SignInAdmin(data: SignInAdminInterface) {
  return await axios
    .post(`${apiUrl}/signin-admin`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}
async function SignIn(data: SignInInterface) {
  return await axios
    .post(`${apiUrl}/signin-student`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}
async function GetStudents() {
  return await axios
    .get(`${apiUrl}/students`, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}
async function GetStudentsById(id: string) {
  return await axios
    .get(`${apiUrl}/student/${id}`, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}
async function UpdateStudentsById(id: string, data: StudentInterface) {
  return await axios
    .put(`${apiUrl}/student/${id}`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}
async function DeleteStudentsById(id: string) {
  return await axios
    .delete(`${apiUrl}/student/${id}`, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}

async function CreateStudent(data: StudentInterface) {
  return await axios
    .post(`${apiUrl}/student`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}


async function ChangePersonal(data: StudentInterface) {
  return await axios
    .post(`${apiUrl}/signup`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}

    
export {
  SignIn,
  GetStudents,
  GetStudentsById,
  UpdateStudentsById,
  DeleteStudentsById,
  CreateStudent,
  SignInAdmin,
  ChangePersonal,
};
