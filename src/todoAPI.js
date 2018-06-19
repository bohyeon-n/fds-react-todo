import axios from 'axios'; // 구분을 하는 것이 관례이다. 

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
// 로컬스토리지에 추가를 하면 자동으로 요청을 다르게 보낼 수 있다. 상태에 따라 요청을 다르게 
todoAPI.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  }
  return config 
})
export default todoAPI;

