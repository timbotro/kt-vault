import { useState } from "react"
import "./App.css"

import DemoGif from "../assets/demo.gif"
import Logo from "../assets/vault-run.jpg"
import Me from "../assets/me.jpeg"
import Kint from "../assets/kint.png"

function App() {
  return (
    <div className="App">
      <a name="home"></a>
      <div class="navbar bg-base-200">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">kt vault runner</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#why">Why</a>
            </li>
            <li>
              <a href="#functions">Functions</a>
            </li>
            <li>
              <a href="#how">How to</a>
            </li>
            <li>
              <a>Docs</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={Logo} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">KT Vault Runner</h1>
            <p class="text-4xl py-6">Essential workflow automation for Vault Operators on the Kinsugi Network.</p>
            <button class="btn btn-primary">Scroll Down to Learn More</button>
          </div>
        </div>
      </div>

      <a name="why"></a>
      <div class="hero min-h-screen bg-base-300">
        <div class="hero-content flex-col lg:flex-row">
          <img src={Kint} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">We need more Vault Runners!</h1>
            <br></br>
            <p class="text-2xl">
              Kintsugi Vaults allow for fully insured wrapping of the most robust cryptocurrency asset - <b>Bitcoin</b>.
              To ensure decentralization, we need to attract high quantities of small vault operators.
            </p>
            <br></br>
            <p class="text-2xl">
              However, smaller vault operators usually only custody their own funds and are naturally more
              self-interested.
            </p>
            <br></br>
            <p class="text-2xl">
              <b>kt-vault-runner</b> has been made specifically for individuals to achieve a higher capital efficiency
              of their funds but automating laborious tasks so they can maintain high yields whilst reducing market risk
              of holding multiple volatile assets.
            </p>
          </div>
        </div>
      </div>


      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={DemoGif} class="max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">🤌 One Touch Execution </h1>
            <p class="py-6">Cross-chain transactions execute in sequence after setting desired parameters.</p>
          </div>
        </div>
      </div>

      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={DemoGif} class="max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Collateral Calculation ⚖️</h1>
            <p class="py-6">Using a combination of on-chain data, external price oracles and aggregated sources; <b>kt vault runner </b>  
             calculates the neccesary about your vault so you can make decisions on how to balance the market risk of holding <b>BTC</b>,
             <b>KINT</b> and <b>KSM</b>.</p>
          </div>
        </div>
      </div>

      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={DemoGif} class="max-w-2xl rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">🔐 Secure by Design</h1>
            <p class="py-6">Your seedphrase is only ever used to generate a KeychainPair, and is secured by password on your local device.</p>
            <p class="py-6">It is only ever used in a single line of code, as part of <b>Parity's</b> official library.</p>
          </div>
        </div>
      </div>

      {/* <div class="divider"></div> */}

      <footer class="footer footer-center p-10 bg-base-200 text-primary-content">
        <div>
          <img src={Me} width="100" height="100"></img>
          {/* <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg> */}
          <p class="font-bold">by timbotronic</p>
        </div>
        <div>
          <div class="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
