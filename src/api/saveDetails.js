import postWithOutToken from "../helper/postWithoutToken";

const saveDetails = async (details)=> {
    try {
        const res = await postWithOutToken("/details/get_hospital_details", details);
        if (res.data.status) {
          return {
            ok: res.data.status,
            data: res.data.data,
            message: res.data.message,
          };
        } else {
          return {
            ok: res.data.status,
            data: null,
            message: res.data.errors[0].msg,
          };
        }
      } catch (err) {
        return {
          ok: false,
          data: null,
          message: err.response.data.message,
        };
      }
}

export default saveDetails;