"use client";

import { loginAction } from "@/actions/auth";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Cookies from "js-cookie";

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
        <div>
          <input
            name="username"
            type="text"
            placeholder="username"
            className={clsx("rounded-md border border-gray-200 p-2 w-72", {
              "border-red-500 outline-red-500": state.errors?.username,
            })}
            aria-describedby="username-error"
          />
          {state.errors?.username && (
            <div id="username-error" aria-live="polite" aria-atomic="true">
              {state.errors.username.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className={clsx("rounded-md border border-gray-200 p-2 w-72", {
                "border-red-500 outline-red-500": state.errors?.username,
              })}
              aria-describedby="password-error"
            />
            <div
              className="absolute inset-y-0 right-0 cursor-pointer"
              onClick={(e) => {
                setShowPassword((state) => !state);
              }}
            >
              {showPassword ? (
                <EyeIcon className="h-full w-10 p-1" />
              ) : (
                <EyeSlashIcon className="h-full w-10 p-1" />
              )}
            </div>
          </div>
          {state.errors?.password && (
            <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>

        <SubmitButton />
        <div className="flex flex-col gap-y-1">
          <Link
            className="rounded-md bg-gray-400 font-bold p-2 w-72 text-center"
            href={"/portforlio"}
            onClick={() => {
              Cookies.set("token", "guest");
            }}
          >
            Guest
          </Link>
          <p className="text-red-600">Guest can see only portforlio</p>
        </div>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={clsx("rounded-md bg-amber-400 font-bold p-2 w-72", {
        "opacity-50": pending,
      })}
      disabled={pending}
    >
      {pending ? "Loading" : "Sign in"}
    </button>
  );
}
