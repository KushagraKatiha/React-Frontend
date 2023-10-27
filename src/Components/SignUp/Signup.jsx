import React from 'react'
import Navbar from '../Navbar/Navbar'

function Signup() {
  return (
    <>
    <Navbar/>
    <section class="rounded-md h-screen w-full bg-black/80 p-2">
  <div class="flex items-center justify-center w-full h-full bg-white">
    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <h2 class="text-2xl font-bold leading-tight text-black">
        Sign up to create account
      </h2>
      <p class="mt-2 text-base text-gray-600">
        Already have an account?{" "}
        <a
          href="#"
          title=""
          class="font-medium text-black transition-all duration-200 hover:underline"
        >
          Sign In
        </a>
      </p>
      <form action="#" method="POST" class="mt-8">
        {/* Full Name */}
        <div class="space-y-5">
          <div>
            <label for="name" class="text-base font-medium text-gray-900">
              {" "}
              Full Name{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Full Name"
                id="name"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label for="name" class="text-base font-medium text-gray-900">
              {" "}
              Username{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="User Name"
                id="name"
              />
            </div>
          </div>
          <div>
            <label for="email" class="text-base font-medium text-gray-900">
              {" "}
              Email address{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                id="email"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="text-base font-medium text-gray-900">
                {" "}
                Confirm Password{" "}
              </label>
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Confirm Password"
                id="password"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Create Account{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
</>
  )
}

export default Signup