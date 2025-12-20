<script>
    import "./styles.css";
</script>

<svelte:head>
    <title>Welcome to the Show!</title>
    <meta name="description" content="Game Show Night with Naka!" />
</svelte:head>

<div class="app">
    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
    }
    main {
        height: 100dvh;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>
