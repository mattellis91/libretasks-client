<script lang="ts">
  import "../app.postcss";
  import Header from "../components/Header.svelte";
  import "./styles.css";

  let collapsed = false;
  let submenuOpen = false;

  import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
  import FaTasks from 'svelte-icons/fa/FaTasks.svelte'
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
  import FaBorderAll from 'svelte-icons/fa/FaBorderAll.svelte'
  import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte'
  import FaHome from 'svelte-icons/fa/FaHome.svelte'

  const menuItems = [
    {title: "Item 1"},
    {title: "Item 2", icon: FaSearch},
    {title: "Item 3", spacing: true, icon: FaBorderAll},
    {title: "Item 4", icon: FaBorderAll,
      submenu: true,
      submenuItems: [
        { title: "submenu 1"},
        { title: "submenu 2"},
        { title: "submenu 3"}
      ]
    },
    { title: "Item 5", icon: FaBorderAll},
    { title: "Item 6", icon: FaBorderAll},
    { title: "Item 7", spacing: true, icon: FaBorderAll},
    { title: "Item 8", icon: FaBorderAll},
    { title: "Item 9", icon: FaBorderAll}
  ]
  
  function toggleCollapsed() {
    collapsed = !collapsed;
  }

  function handleDropdown() {
    submenuOpen = !submenuOpen;
  }

</script>

<div class="app">
  <div class="flex">
    <div
      class:w-72={!collapsed}
      class:w-20={collapsed} 
      class="bg-dark-purple h-screen p-5 pt-8 relative duration-300">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div on:click={toggleCollapsed}
        class:rotate-180={!collapsed}
        class="bg-white text-dark-purple w-6 h-6 p-1 rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer">
        <FaArrowLeft />     
      </div>
      <div class="inline-flex">
        <div 
          class:rotate-[360deg]={!collapsed}
          class="w-8 h-8 bg-fuchsia-300 rounded float-left p-1 block cursor-pointer mr-2 duration-500">
          <FaTasks />
        </div>
        <h1 class:scale-0={collapsed} class="text-white origin-left font-medium text-2xl duration-300">Libretasks</h1>
      </div>

      <!-- <div
        class:px-4={!collapsed}
        class:px-2.5={collapsed} 
        class="flex items-center rounded-md bg-light-white mt-6 py-2">
        <div
          class:mr-2={!collapsed} 
          class="w-4 h-4 text-white block float-left cursor-pointer">
          <FaSearch />
        </div>
        <input type="search" placeholder="Search" 
        class:hidden={collapsed}
        class="bg-transparent w-full text-white focus:outline-none"/>
      </div> -->

      <div class="text-gray-300 items-center py-4 mt-20 border-b border-gray-300 mb-4">
        <div 
                class="text-gray-300 text-sm flex items-center gap-x-4 block cursor-pointer hover:bg-light-white rounded-md mb-2"
              >
              <div class="w-5 h-5 block float-left">
                <FaHome />
              </div>
              <span
                class:hidden={collapsed} 
                class="text-base font-medium flex-1 duration-200">Home</span>
        </div>
      </div>

      <ul class="pt-2">
        <span class="text-gray-300 text-sm block mb-2">ALL BOARDS (2)</span>
        {#each menuItems as item}
          <li
            class:mt-9={item.spacing}
            class:mt-2={!item.spacing} 
            class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
            <div class="w-5 h-5 block float-left">
              {#if item.icon}
                <svelte:component this={item.icon} />
              {:else}
                <FaBorderAll />
              {/if}
            </div>
            <span
            class:hidden={collapsed} 
            class="text-base font-medium flex-1 duration-200">{item.title}</span>
            {#if item.submenu && !collapsed}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <div 
              class:rotate-180={submenuOpen}
              class="w-4 h-4 text-white" on:click={handleDropdown}><FaChevronDown /></div>
            {/if}
          </li>

          {#if item.submenu && submenuOpen && !collapsed}
            <ul>
             {#each item.submenuItems as submenuItem}
              <li
                class:mt-9={item.spacing}
                class:mt-2={!item.spacing} 
                class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
              >
                {submenuItem.title}
              </li>
             {/each} 
            </ul>
          {/if}
        {/each}
      </ul>

      <div class=" flex fixed bottom-10 justify-between items-center w-full">
        <div class="flex justify-center items-center space-x-2">
          <div>
            <img class="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
          </div>
          <div class="flex justify-start flex-col items-start">
            <p class="cursor-pointer text-sm leading-5 text-white">Alexis Enache</p>
            <p class="cursor-pointer text-xs leading-3 text-gray-300">alexis81@gmail.com</p>
          </div>
        </div>
        <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
  
      </div>

    </div>
    <div class="w-full h-screen">

      <!-- header -->
      <div class="border-b border p-7">
        <h1 class="origin-left font-medium text-xl">Board title</h1>
      </div>

<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-lg align-middle">
    <form
      action=""
      class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p class="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign in
      </button>

      <p class="text-center text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p>
    </form>
  </div>
</div>


    </div>
  </div>
</div>

<style>
  .app {
    min-height: 100vh;
  }

  main {
    transition: margin-left .5s;
    padding: 16px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }

</style>
