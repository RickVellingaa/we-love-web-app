<script>
    import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
    export let data
</script>

<section class="content-container">
    <div class="container">
        <div class="items grid">
            <SliceZone slices={data.slices} {components} />
        </div>
    </div>
</section>

<style>
    .content-container {
        position: relative;
        color: var(--txt-clr);
        padding-top: 5.625rem;
        padding-bottom: 5.625rem;
    }

    .container {
        position: relative;
        width: 100%;
        max-width: 1441px;
        padding-left: 2em;
        padding-right: 2em;
        margin-left: auto;
        margin-right: auto;
    }

    .items {
        color: var(--txt-clr);
        font-size: 1.0125rem;
        line-height: 150%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(12,minmax(0,1fr));
        gap: 3.75rem;
    }

    @media (max-width: 1280px) {
        .container {
            max-width: 1280px;
            padding-right: 2rem;
            padding-left: 2rem;
        }
    }

    @media (max-width: 1024px) {
        .container {
            max-width: 1024px;
            padding-right: 2rem;
            padding-left: 2rem;
        }
    }

    @media (max-width: 768px) {
        .container {
            max-width: 768px;
            padding-right: 1rem;
            padding-left: 1rem;
        }
        .grid {
            gap: 2em;
        }
    }

    @media (max-width: 550px) {
        .container {
            width: 100%;
            max-width: auto;
            padding-right: 1rem;
            padding-left: 1rem;
        }
    }
    
    @media (max-width: 387px) {
    .grid {
      gap: 0;
    }
  }

</style>