<script lang="ts">
    import {flip} from "svelte/animate";
    import {dndzone} from "svelte-dnd-action";
    let items = [
        {id: 1, name: "item1"},
        {id: 2, name: "item2"},
        {id: 3, name: "item3"},
        {id: 4, name: "item4"}
    ];
    let items2 = [
        {id: 5, name: "item1"},
        {id: 6, name: "item2"},
        {id: 7, name: "item3"},
        {id: 8, name: "item4"}
    ]
    const flipDurationMs = 300;
    function handleDndConsider(e:any) {
        items = e.detail.items;
    }
    function handleDndFinalize(e:any) {
        console.log(e)
        items = e.detail.items;
    }
</script>

<style>
    .column {
        width: 272px;
    }
</style>

<div class='board-wrapper w-full flex flex-row'>
    <section class="column bg-gray-100 mr-2.5" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
        {#each items as item(item.id)}
        <div class="w-full" animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
        {/each}
    </section>
    <section class="column bg-gray-100 mr-2.5" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
        {#each items2 as item(item.id)}
        <div class="w-full" animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
        {/each}
    </section>
    <section class="column bg-gray-100 mr-2.5" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
        {#each items2 as item(item.id)}
        <div class="w-full" animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
        {/each}
    </section>
    <section class="column bg-gray-100 mr-2.5" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
        {#each items2 as item(item.id)}
        <div class="w-full" animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
        {/each}
    </section>
</div>