import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/teacher";

class TeacherService {
  saveTeacher(teacher) {
    return axios.post(BASE_API_URL + "/save", teacher);
  }

  getAllTeacher() {
    return axios.get(BASE_API_URL + "/");
  }

  getTeacherById(id){
    return axios.get(BASE_API_URL+"/"+id);
  }

  deleteTeacher(id){
    return axios.get(BASE_API_URL+"/delete/"+id)
  }

  updateTeacher(id,teacher){
    return axios.post(BASE_API_URL+"/update/"+id,teacher)
  }
}

export default new TeacherService();
