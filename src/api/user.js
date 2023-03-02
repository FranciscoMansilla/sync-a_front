import api from './index';


const user = {
  login: async(data)=>{
    try {
      const { data: res } = await api.post("/user/login", data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("SESSION_INFO", JSON.stringify(res.user));
      return res;
    } catch (err) {
      return err.response.data;
    }
  },
  register: async(data)=>{
    try {
      const { data: res } = await api.post("/user/register", data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("SESSION_INFO", JSON.stringify(res.user));
      console.log(res)
      return res;
    } catch (err) {
      return err.response.data;
    }
  },
  info: async()=>{
    try {
      const { data: res } = await api.get("/user/info");
      return res;
    } catch (err) {
      return err.response.data;
    }
  },
  update: async(data)=>{
    try {
      const { data: res } = await api.patch("/user/update", data);
      return res;
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  }
}

export default user