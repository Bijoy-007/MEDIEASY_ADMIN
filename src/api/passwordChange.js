import postWithToken from "../helper/postWithToken";

const passwordChange = async (body) => {
  try {
    const res = await postWithToken("/auth/password_change", body);
    console.log(
      "🚀 ~ file: passwordChange.js ~ line 6 ~ passwordChange ~ res",
      res
    );
    if (res.data?.status) {
      return {
        ok: res.data?.status,
        data: res.data?.data,
        message: res.data?.message,
      };
    } else {
      return {
        ok: res.data?.status,
        data: null,
        message: res.data?.errors[0].msg,
      };
    }
  } catch (err) {
    return {
      ok: false,
      data: null,
      message: err.response.data?.message,
    };
  }
};

export default passwordChange;
