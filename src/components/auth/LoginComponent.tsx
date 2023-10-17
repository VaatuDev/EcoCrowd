"use client";
import { stringDispatcher } from '@/interfaces/auth';
import { sendLogin } from '@/utils/auth';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  controller: stringDispatcher
}

//Login Component Form to Authenticate an user.
export const LoginComponent: React.FC<Props> = ({controller}) => {
  const [loginForm, setLoginForm] = useState({username: "", email: "", password: ""});

  const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value 
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendLogin(loginForm).then((result) => {
      alert(result);
    }).catch((err) => {
      alert(err);
    });
  }

  return (
    <div className="flex flex-col drop-shadow-lg items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <Link href="/" className="flex items-center mb-6 text-2xl font-bold text-gray-200">
        🍃EcoCrowd
      </Link>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
          <form onSubmit={(e) => onSubmit(e)} className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" placeholder="name@company.com" onChange={(e) => handleForm(e)} required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5" onChange={(e) => handleForm(e)} required />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300"/>
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-500">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-teal-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full duration-300 text-slate-900 bg-teal-400 hover:scale-105 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet? <a onClick={() => controller("")} href="#" className="font-medium text-teal-600 hover:underline">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
