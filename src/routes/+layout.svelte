<script lang="ts">
  import "../app.postcss";
  import Header from "../components/Header.svelte";
  import "./styles.css";
</script>

<div class="app">
  <Header />
  <div class="flex">
    <div class="w-72 bg-purple-900 h-screen p-5 pt-8 relative-duration-300">
      <ul class="pt-6">
        <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">test</li>
        <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">test</li>
        <li class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4">test</li>
      </ul>
    </div>
    <main>
      <slot />
    </main>
  </div>
  <footer />
</div>

<style>

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
