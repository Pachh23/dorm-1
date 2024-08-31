import { StudentInterface } from "../../interfaces/IUser";
import { PersonalAllInterface } from "../../interfaces/PersonalAll";
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
async function SignInStudent(data: SignInInterface) {
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
    .post(`${apiUrl}/customer-create`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}

async function ChangePersonal(data: PersonalAllInterface) {
  return await axios
    .post(`${apiUrl}/personal`, data, requestOptions)
    .then((res) => res)
    .catch((e) => e.response);
}
/*
async function CreateStudent(data: StudentInterface) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/students`, requestOptions)
    .then((res) => {
      if (res.status == 201) {
        return res.json();
      } else {
        return false;
      }
    });

  return res;
}
*/

export {
  SignInStudent,
  GetStudents,
  GetStudentsById,
  UpdateStudentsById,
  DeleteStudentsById,
  CreateStudent,
  SignInAdmin,
  ChangePersonal,
};
