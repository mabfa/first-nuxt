import authService from "../../services/auth";
import searchService from "../../services/searchServiceice";
export default {
  name: "mabfa",
  components: {},
  props: [],
  data() {
    return {
      baseUrl: process.env.baseUrl,
      allStatus: "",
      token: "",
      flightResault: "",
    };
  },
  computed: {},
  mounted() {
    // this.GetTokenAuth();
    this.GetAllStatus();
    this.getUser();
    this.getSettingInfo();
    this.searchFlight();
  },
  methods: {
    GetAllStatus() {
      // console.log("mabfa1");
      authService.getAll().then((Response) => {
        this.allStatus = Response.data;
        // console.log("mabfa");
        // console.log(response.status);
      });
    },
    // async GetTokenAuth() {
    //   console.log("login");
    //   try {
    //    await authService.login().then((Response) => {
    //       if (Response.data.access_token) {
    //     this.token = Response.data.access_token;
    //     localStorage.setItem("isAuth", true);
    //     localStorage.setItem("accessToken","JWT " + Response.data.access_token);
    //     localStorage.removeItem("mabfa");

    //       }

    //     });
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // },
    getUser() {
      searchService.getUser().then((response) => {
        console.log("get User", response);
      });
    },
    getSettingInfo() {
      console.log("get setting func");
      searchService.getSettingInfo().then((response) => {
        console.log("got seting info response", response);
      });
    },
    searchFlight() {
      console.log("search");
      searchService.searchFlight().then((Response) => {
        this.flightResault = Response.data;
      });
    },
  },
};
