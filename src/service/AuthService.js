import axios from "axios";

class AuthService {

   
  // const API_URL = "htpp://192.168.1.65:8080/";
  // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY4Nzg1NDkxMywiZXhwIjoxNjg4NzE4OTEzfQ.Y7NnrbgHmlCGK6l3Y0n7eolXKWUVegIZlhSqG2ZqFCAz2HpLPauz_vs3J5VNPoz46ffZJdAXANFc90O-jq0Wmw";
  getalldata() {
    return axios.get("http://192.168.1.65:8080/project/get-project-by-id/{id}",{
        headers:{
            "Authorization" : "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTY4Nzg1NDkxMywiZXhwIjoxNjg4NzE4OTEzfQ.Y7NnrbgHmlCGK6l3Y0n7eolXKWUVegIZlhSqG2ZqFCAz2HpLPauz_vs3J5VNPoz46ffZJdAXANFc90O-jq0Wmw"
        }});
        
  }
}
export default new AuthService();
