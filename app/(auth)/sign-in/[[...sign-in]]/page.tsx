"use client";

import Footer from "@/app/Home/_components/Footer";
import { Button } from "@/components/ui/button";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { BotIcon, FileJsonIcon } from "lucide-react";

export default function SignInPage() {
  return (
    <>
      <div className="flex relative ">
        <div className="z-[99] hidden md:block relative ">
          <video
            autoPlay
            className="hidden md:block md:h-screen object-cover"
            loop
            muted
            src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4"
          >
            {" "}
          </video>
          <div className="absolute inset-0 w-full flex flex-col gap-[55vh] p-20">
            <h1 className="home-head font-semibold items-center text-3xl flex">
              <span className="text-violet-500">
                {" "}
                <BotIcon />
              </span>{" "}
              Join Monk-Ai Now
              <div className="line h-2 w-28 ml-2 bg-violet-700"></div>
            </h1>
            {/* <div>
              {" "}
              <img
                src="/logo.png"
                alt=""
                className="h-36 ml-56 hover:animate-pulse "
              />
            </div> */}
            <div className="w-[85vh] text-sm text-white">
              {" "}
              <p>
                At MONK-Ai you'll find the best usecases of AI in respect to
                content writing and other such usefull templates. You'll get
                free 50,000 words.
              </p>
              <Button
                variant="ghost"
                className="bg-slate-400  mt-5 border-2 border-violet-700 hover:bg-slate-500  h-12 text-white  rounded-3xl"
              >
                <a href="/dashboard" className="w-40">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className=" grid md:w-[60vh] flex-grow items-center bg-white p-[20vw] overflow-hidden md:p-20 md:justify-center">
          <SignIn.Root>
            <SignIn.Step name="start" className="w-full space-y-6 rounded-2xl ">
              <header className="text-center flex  flex-col items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2814/2814666.png"
                  alt=""
                  className="h-28 rounded object-fill"
                />
                <h1 className="mt-4 text-[7vw] md:text-xl font-medium tracking-tight text-neutral-950">
                  Sign in to MONK-AI
                </h1>
              </header>
              <Clerk.GlobalError className="block text-sm text-red-600" />
              <Clerk.Field name="identifier">
                <Clerk.Label className="sr-only">Email</Clerk.Label>
                <Clerk.Input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full border-b border-neutral-200 bg-white pb-2 text-sm/6 text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                />
                <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
              </Clerk.Field>
              <SignIn.Action
                submit
                className=" relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm font-medium text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0"
              >
                Sign In
              </SignIn.Action>
              <div className=" rounded-xl w-58 md:w-full bg-neutral-100 p-5">
                <p className="mb-4 text-center text-sm/5 text-neutral-500">
                  Alternatively, sign in with these platforms
                </p>
                <div className="space-y-2">
                  <Clerk.Connection
                    name="google"
                    className="flex w-full items-center justify-center gap-x-3 rounded-md bg-gradient-to-b from-white to-neutral-50 px-2 py-1.5 text-sm font-medium text-neutral-950 shadow outline-none ring-1 ring-black/5 hover:to-neutral-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:text-neutral-950/60"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      aria-hidden
                      className="size-4"
                    >
                      <g clipPath="url(#a)">
                        <path
                          fill="currentColor"
                          d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                    Login with Google
                  </Clerk.Connection>
                </div>
              </div>
              <p className="text-center text-sm text-neutral-500">
                Don&apos;t have an account?{" "}
                <a
                  href="/sign-up"
                  className="rounded px-1 py-0.5 text-neutral-700 outline-none hover:bg-neutral-100 focus-visible:bg-neutral-100"
                >
                  Sign up
                </a>
              </p>
            </SignIn.Step>
            <SignIn.Step
              name="verifications"
              className="w-full space-y-6 rounded-2xl px-4 py-10 sm:w-96 sm:px-8"
            >
              <SignIn.Strategy name="email_code">
                <header className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="mx-auto size-10"
                  >
                    <mask
                      id="a"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                    </mask>
                    <g fill="#0A0A0A" mask="url(#a)">
                      <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                      <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                    </g>
                  </svg>
                  <h1 className="mt-4 text-xl font-medium tracking-tight text-neutral-950">
                    Verify email code
                  </h1>
                </header>
                <Clerk.GlobalError className="block text-sm text-red-600" />
                <Clerk.Field name="code">
                  <Clerk.Label className="sr-only">Email code</Clerk.Label>
                  <Clerk.Input
                    type="otp"
                    required
                    placeholder="Email code"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm/6 text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                  />
                  <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
                </Clerk.Field>
                <SignIn.Action
                  submit
                  className="relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0"
                >
                  Continue
                </SignIn.Action>
              </SignIn.Strategy>
              <SignIn.Strategy name="phone_code">
                <header className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 40 40"
                    className="mx-auto size-10"
                  >
                    <mask
                      id="a"
                      width="40"
                      height="40"
                      x="0"
                      y="0"
                      maskUnits="userSpaceOnUse"
                    >
                      <circle cx="20" cy="20" r="20" fill="#D9D9D9" />
                    </mask>
                    <g fill="#0A0A0A" mask="url(#a)">
                      <path d="M43.5 3a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V2ZM43.5 8a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46V7ZM43.5 13a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 18a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 23a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 28a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 33a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1ZM43.5 38a.5.5 0 0 0 0-1v1Zm0-1h-46v1h46v-1Z" />
                      <path d="M27 3.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 8.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM23 13.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM21.5 18.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM20.5 23.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM22.5 28.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM25 33.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2ZM27 38.5a1 1 0 1 0 0-2v2Zm0-2h-46v2h46v-2Z" />
                    </g>
                  </svg>
                  <h1 className="mt-4 text-xl font-medium tracking-tight text-neutral-950">
                    Verify phone code
                  </h1>
                </header>
                <Clerk.GlobalError className="block text-sm text-red-600" />
                <Clerk.Field name="code">
                  <Clerk.Label className="sr-only">Phone code</Clerk.Label>
                  <Clerk.Input
                    type="otp"
                    required
                    placeholder="Phone code"
                    className="w-full border-b border-neutral-200 bg-white pb-2 text-sm/6 text-neutral-950 outline-none placeholder:text-neutral-400 hover:border-neutral-300 focus:border-neutral-600 data-[invalid]:border-red-600 data-[invalid]:text-red-600"
                  />
                  <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
                </Clerk.Field>
                <SignIn.Action
                  submit
                  className="relative w-full rounded-md bg-neutral-600 bg-gradient-to-b from-neutral-500 to-neutral-600 py-1.5 text-sm text-white shadow-[0_1px_1px_0_theme(colors.white/10%)_inset,0_1px_2.5px_0_theme(colors.black/36%)] outline-none ring-1 ring-inset ring-neutral-600 before:absolute before:inset-0 before:rounded-md before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 active:bg-neutral-600 active:text-white/60 active:before:opacity-0"
                >
                  Login
                </SignIn.Action>
              </SignIn.Strategy>
              <p className="text-center text-sm text-neutral-500">
                Don&apos;t have an account?{" "}
                <a
                  href="/sign-up"
                  className="rounded px-1 py-0.5 text-neutral-700 outline-none hover:bg-neutral-100 focus-visible:bg-neutral-100"
                >
                  Sign up
                </a>
              </p>
            </SignIn.Step>
          </SignIn.Root>
        </div>
      </div>
      <div className="p-1">
        <Footer />
      </div>
    </>
  );
}
