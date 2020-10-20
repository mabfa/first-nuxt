class GetAccessTokenService {
  constructor() {}

  GetAccessToken() {
    return localStorage.getItem("accessToken");
  }
  getMabfa() {
    return localStorage.getItem("mabfa");
  }
}

export default new GetAccessTokenService();
