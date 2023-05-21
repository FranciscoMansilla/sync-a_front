import api from './index';


const licence = {
  getAllLicences: async()=>{
    try {
      const { data: res } = await api.get("/licence/getAllLicences");
      return res;
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  }
}

export default licence