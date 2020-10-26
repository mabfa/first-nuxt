// import auth from "@/services/auth";
// import GetAccessTokenService from "@/services/GetAccessTokenService";
export default {
  name: "index",
  components: {},
  props: [],
  data() {
    return {
      testenv: process.env.TEST_VARIABLE,
    };
  },
  computed: {},
  mounted() {
    // this.isAuth();
  },
  methods: {
    // isAuth() {
    //   if (!GetAccessTokenService.GetAccessToken) {
    //     this.geustLogin();
    //   }
    // },
    // geustLogin() {
    //   auth.geustLogin().then((response) => {
    //     localStorage.setItem(
    //       "access_token",
    //       "JWT " + response.data.access_token
    //     );
    //   });
    // },
  },
};
