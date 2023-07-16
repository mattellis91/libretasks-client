<script lang="ts">
  import "../app.postcss";
  import Header from "../components/Header.svelte";
  import "./styles.css";

  let collapsed = false;
  
  function collapse() {
    collapsed = true;
  }

  function expand() {
    collapsed = false
  }

</script>

<div class="app">
  <Header bind:collapsed={collapsed}/>
  <div class=content>
    <div id="mySidebar" class="sidebar" class:collapsed={collapsed}>
      {#if collapsed}
        <span class="expand-button">+</span>
      {:else}
        <span>Username</span>
        
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      {/if}
    </div>
    <main>
        <slot />
    </main>
  </div>
  <footer />
</div>

<style>

.sidebar {
  height: 100vh;
  width: 250px;
  background-color: #111;
  transition: 0.5s;
  padding-top: 60px;
}
.expand-button {
  color: white;
  font-size: 2rem;
  background-color: #444;
  border-radius: 100%;
  position: relative;
  left: 10px;
  top: 50%;
  z-index: 2;
}

.content {
  display:flex;
  flex-flow: row;
} 

.collapsed {
  width: 20px;
}

.indented {
  margin-left: 250px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
}

.openbtn:hover {
  background-color: #444;
}

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
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
  }

</style>
