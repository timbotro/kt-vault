import { useState } from "react"
import "./App.css"

function Navbar() {
  return (
    <div className="Navbar" class="relative  opacity-100">
      <div class="navbar fixed z-50 primary">
        <div class="navbar-start ">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>
          <a class="btn btn-ghost normal-case text-xl">kt vault runner</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#why">Why</a>
            </li>
            <li tabindex="0">
              <a>
                Features
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a href="#exec">Execution</a>
                </li>
                <li>
                  <a href="#calc">Calculation</a>
                </li>
                <li>
                  <a href="#sec">Security</a>
                </li>
                <li>
                  <a href="#ux">UX</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#how">How to</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end"></div>
      </div>
    </div>
  )
}

export default Navbar
