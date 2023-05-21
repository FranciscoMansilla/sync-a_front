import api from './index';


const category = {
  getAllCategories: async()=>{
    try {
      const { data: res } = await api.get("/category/getAllCategories");
      return res;
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  }
}

export default category