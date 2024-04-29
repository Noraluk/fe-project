interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  status: number;
  data: Data;
}

interface Data {
  token: string;
}