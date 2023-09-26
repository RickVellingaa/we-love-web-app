<script>
    import Header from '$lib/components/Header.svelte'
</script>

<main>
    <Header />
    <slot />
</main>

<style>
    :root {
        --main-clr: #455DEE;
        --txt-clr: #2C2F47;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
</style>