<script lang="ts">
    export let collapsed:boolean
    
    function toggle() {
        collapsed = !collapsed;
    }

</script>

<style>
    .toggle-trigger:hover {
        cursor: pointer;
    }
</style>

<div class="w-full bg-gray-200">
    <div class="logo section">

    </div>
    <span class="toggle-trigger" on:click|preventDefault={toggle}>Click to toggle</span>
    Header
</div>