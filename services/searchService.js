import authAxios from "./axios-service/authAxios";
// import searchService from "./"

class searchService {
  getUser() {
    return authAxios.post("/api/v2/users/get_user");
  }
  getSettingInfo() {
    return authAxios.post("/api/v2/front/get_settings_info", {
      app_key: "",
      platform: "plugin",
      get_settings: true,
    });
  }
  searchFlight() {
    return authAxios.post("/api2/flights/search", {
      childs: 0,
      infant: 0,
      adults: 1,
      provider_code: "DELTABAN",
      source: "THR",
      destination: "KIH",
      flight_date: "2020-10-21",
      scope: "local",
      flight_class: "1",
      trip_type: 1,
      origin_trip_type: 1,
    });
  }
}
export default new searchService();
