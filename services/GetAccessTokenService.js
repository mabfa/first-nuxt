class GetAccessTokenService {
  constructor() {}

  GetAccessToken() {
    return localStorage.getItem("access_token");
  }
  getMabfa() {
    return localStorage.getItem("mabfa");
  }
}

export default new GetAccessTokenService();
