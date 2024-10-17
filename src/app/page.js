import Image from "next/image";

export default function Home() {
  return (
    <header class="mt-10 py-5 border-b-8 border-b-red-900 border-dashed flex items-center justify-between h-14">
      <a class="dark:text-purple-500 uppercase font-bold text-purple-600" href="#">Travel</a>
      <nav class="hidden md:flex items-center">
        <ul class="text-gray-500 font-semibold inline-flex items-center ">
        <li >
          <a class="header-link" href="#">Home</a>
        </li>
        <li>
          <a class="header-link" href="#">About</a>
        </li>
        <li>
          <a class="header-link" href="#">Contact</a>
        </li>
      </ul>

      <ul class="inline-flex items-center ">
        <li><button class="header-btn focus:outline-none focus:ring focus:ring-violet-300 ">Login</button></li>
        <li><button class=" header-btn">Register</button></li>
      </ul>
      </nav>

      <button class="inline-block md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      </button>
    </header>
   
  );
}
