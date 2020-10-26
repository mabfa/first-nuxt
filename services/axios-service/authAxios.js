import axios from "axios";
import store from "../../store/index";
// import store from "./../../store/index";
import GetAccessTokenService from "../GetAccessTokenService";
// import auth from "../auth";

const instance = axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
    // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
    "Content-Type": "application/json, application/json;charset=utf-8",
    "provider-code": "deltaban",
    // Accept: 'application/json',
    Accept:
      "application/json, text/plain, */*, application/json, text/plain, */*",
    // Authorization: ,
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = GetAccessTokenService.GetAccessToken();
    // const mabfa = GetAccessTokenService.getMabfa();
    if (!token) {
        console.log("khar");
      const tok = store.dispatch('getGuestToken');
      console.log("tok----1");
      console.log("tok----"+tok);

        config.headers["Authentication"] = tok;
        return config;
    }
    else{
      config.headers["Authorization"] = token;
      return config;
    }
    // if (token) {
    //   console.log("local storage dasht", localStorage.getItem("access_token"));
    //   config.headers["Authorization"] = token;
    //   console.log("if set shod", config.headers["Authorization"]);
    //   return config;
    // } 
    // else{
    //   return config;
    // }
    // else {
    //   console.log("local storage nadasht");
    //   auth.login().then((response) => {
    //     console.log("oomad toosh");
    //     if (response.data.access_token) {
    //       console.log("response dasht", response.data.access_token);
    //       // this.tok en = response.data.access_token;
    //       localStorage.setItem("isAuth", true);
    //       localStorage.setItem(
    //         "access_token",
    //         "JWT " + response.data.access_token
    //       );
    //       localStorage.removeItem("mabfa");
    //       // token = GetAccessTokenService.GetAccessToken();
    //       config.headers["Authorization"] =
    //         "JWT " + response.data.access_token;
    //       console.log("else set shod", config.headers["Authentication"]);

    //       return config;
    //     } else {
    //       return config;
    //       // console.log("nadasht");
    //     }
    //   });
    // }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    // console.log("response");
    return response;
  },
  function (error) {
    if (error && error.response && error.response.status) {
      if (error.response.status === 401) {
        store.dispatch('getGuestToken', { reset: true });
        redirect({ name: 'index' });
      }
    }
    // if (error.response.status === 401) {
    //   console.log("error");
      // console.log(error.response.status);
      // localStorage.removeItem("access_token");
      // localStorage.setItem("mabfa","khar");
      // localStorage.setItem("isAuth", false);
      // store.commit("checkIsAuth");
      // $router.push(`/mabfa/login`);

      // auth.login().then((response)=>{
      //     console.log("oomad toosh");
      //     if (response.data.access_token) {
      //         console.log("dasht")
      //         localStorage.setItem("isAuth", true);
      //         localStorage.setItem("access_token","JWT " + response.data.access_token);
      //         localStorage.removeItem("mabfa");

      //           }
      //           else{
      //               console.log("nadasht");
      //           }
      // },{reset:true});
      // redirect({ name: 'index' });

    // }
     return Promise.reject(error)
    // return false;
  }
);
export default instance;
