import axios from "axios";

export async function login(req: LoginRequest): Promise<LoginResponse> {
  const res = await axios.post(`http://localhost:8080/api/login`, req);

  return res.data;
}
