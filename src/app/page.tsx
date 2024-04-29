"use client";

import { State, loginAction } from "@/actions/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function Home() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="h-screen w-screen flex items-center justify-center bg-yellow-100"
      action={dispatch}
    >
      <div className="rounded-3xl bg-white flex flex-col items-center justify-center p-10 gap-y-6">
        <p className="font-bold">Login</p>
        <input
          name="username"
          type="text"
          placeholder="username"
          className="rounded-md border border-gray-200 p-2 w-72"
        />
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="rounded-md border border-gray-200 p-2 w-72"
          />
          <button
            className="absolute inset-y-0 right-0"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((state) => !state);
            }}
          >
            {showPassword ? (
              <EyeIcon className="h-full w-10 p-1" />
            ) : (
              <EyeSlashIcon className="h-full w-10 p-1" />
            )}
          </button>
        </div>

        <button className="rounded-md bg-amber-400 font-bold p-2 w-72">
          Sign in
        </button>
      </div>
    </form>
  );
}
