<template>
     <header>
    <nav class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
          items 
        ">
      <div class="logo">
        <img src="../../assets/pngegg.png" alt="">
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0">
          <li>
            <router-link class="md:p-4 py-2 block hover:text-red-400" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-red-400" to="/About">Causes</router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-red-400" to="/About">About</router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-red-400" to="/About">Contact</router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-red-400" to="/Signin">Login</router-link>
          </li>
          <li>
            <router-link class="md:p-4 py-2 block hover:text-red-400" to="/Signup">Signup</router-link>
          </li>
          <li>
            <router-link to="/Donation"><button class="support w-full flex items-center justify-center px-2 py-1 border border-transparent text-base leading-6 rounded-md text-white font-bold bg-red-500 hover:bg-red-300 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-5">Give
                Support</button></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

* {
  font-family: "Roboto", sans-serif;
}

.logo img {
  width: 100px;
}

.grid,
.items {
  width: 90%;
  margin: 0 auto;
}

.items li {
  padding: 5px;
}

.items a {
  font-size: 1em;
  font-weight: bold;
}

.object-cover img {
  border-radius: 50%;
}



.exact-active {
  color: rgb(252, 113, 113);
  font-weight: bold;
}
</style>