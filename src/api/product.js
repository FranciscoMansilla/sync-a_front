import api from './index';


const product = {
  getAll: async()=>{
    try {
      const { data: res } = await api.get("/product/getAll");
      return res;
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  },
  create: async(payload)=>{
    try {
      const { data: res } = await api.post("/product/", payload);
      return res;
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  },
  updateCover: async(id, payload)=>{
    try {
      const { data: res } = await api.post(`/product/${id}`, payload);
      return res;
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  }
}

export default product