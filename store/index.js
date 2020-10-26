// export const actions = {
//   async getGuestToken({ commit }, payload) {
//       console.log("dispatch");
//     if (payload && String(payload.reset) === "true") {
//       await this.$auth.logout();
//     }

//     if (this.$auth && this.$auth.getToken("local")) {
//       return;
//     }

//     try {
//       const { data } = await this.$axios.post(
//         '/api/v1/auth',
//         {
//           username: "deltaban_guest",
//           password: "guest",
//         },
//         { headers: { auth: false } }
//       );
//       await this.$auth.setToken("local", `JWT ${data.access_token}`);
//       await commit("SET_USER", data);
//       await this.$auth.setUser(data);
//     } catch (e) {
//       console.log(e);
//     }
//   },
// };
