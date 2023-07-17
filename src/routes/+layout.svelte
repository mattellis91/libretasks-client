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

      <div
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
      </div>

      <ul class="pt-2">
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

    </div>
    <div class="p-7"><h1 class="text-2xl font-semibold">Home Page</h1></div>
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
