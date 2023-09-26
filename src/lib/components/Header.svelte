<script>
    import { page } from '$app/stores' ;
</script>

<div class="navigation">
    <header>
        <div class="navigation-container">
            <nav class="flex">
                <div>
                    <div class="flex items">
                        <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
                        <a href="/posts" class:active={$page.url.pathname === '/posts'}>Posts</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</div>

<style>
    :root {
        --main-clr: #455DEE;
        --txt-clr: #2C2F47;
    }

    .navigation {
        background-color: white;
        border-bottom: 1px solid rgb(238, 238, 238, 1);
        width: 100%;
        position: sticky;
        z-index: 30;
        top: 0;
    }

    .navigation-container {
        position: relative;
        max-width: 1441px;
        padding-left: 2em;
        padding-right: 2em;
        margin-left: auto;
        margin-right: auto;
    }

    .navigation-container nav {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .items {
        column-gap: 3.75em;
    }

    .items a {
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: var(--txt-clr);
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.5;
        padding-top: .25rem;
        padding-bottom: .25rem;
    }

    .items a.active {
        color: var(--main-clr);
        font-weight: 500;
    }
</style>