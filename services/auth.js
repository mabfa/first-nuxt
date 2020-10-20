// const { from } = require("core-js/fn/array")

import mainAxios from "./axios-service/main-axios";
class auth {
  getAll() {
    return mainAxios.get(
      "/api/v2/response_codes/fa/all"
      // { headers: { Authorization: false }}
    );
  }

  login() {
    return mainAxios.post(
      "/api/v1/auth",
      {
        username: "deltaban_guest",
        password: "guest",
      }
      // { headers: { Authorization: false }}
    );
  }
}

export default new auth();
