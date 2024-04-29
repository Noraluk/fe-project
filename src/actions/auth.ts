import { login } from "@/api/auth_api";
import { redirect } from "next/navigation";
import { z } from "zod";
import Cookies from "js-cookie";

const FormSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type State = {
  errors?: {
    username?: string[];
    password?: string[];
  };
  message: string;
};

export async function loginAction(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "validate failed",
    };
  }
  try {
    let req: LoginRequest = {
      username: formData.get("username")!.toString(),
      password: formData.get("password")!.toString(),
    };
    const res = await login(req);
    if (res.status != 200) {
      return {
        message: "login failed",
      };
    }
    Cookies.set("token", res.data.token, { expires: 1 / 48 });
  } catch (error) {
    return {
      message: "login failed",
    };
  }

  redirect("/pokemon/pokedex");
}
