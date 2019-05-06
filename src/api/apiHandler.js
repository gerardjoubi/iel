import axios from "axios";

const ApiUrl = "http://localhost:8000/api";

export const getAllCourses = () => axios.get(`${ApiUrl}/course`);

export const createCourse = data => axios.post(`${ApiUrl}/course`, data);

export const getCourse = id => axios.get(`${ApiUrl}/course/${id}`);

export const deleteCourse = id => axios.delete(`${ApiUrl}/course/${id}`);

export default {
  getAllCourses,
  createCourse,
  getCourse,
  deleteCourse
};