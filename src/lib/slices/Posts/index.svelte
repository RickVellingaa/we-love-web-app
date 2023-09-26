<script>
  /** @type {import("@prismicio/client").Content.PostsSlice} */
  export let slice;
</script>

  {#each slice.items as item}
    <div class="grid-item">

      <div class="img-container">
          <div class="image">
            <a href="/posts/{item.post.uid}">
              <img src="{item.post.data.foto.url}" alt="Foto van lezing {item.post.data.title}">
            </a>
          </div>
      </div>
      <div class="summary">
        <a href="/{item.post.uid}">
          <span>19 Janurai 2023</span>
          <h2>{item.post.data.title}</h2>
          <p>{item.post.data.beschrijving[0].text}..</p>
        </a>
      </div>
    </div>
  {/each}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400&display=swap');

  .grid-item {
    grid-column: span 4/span 4;
  }

  .grid-item div img {
    width: 100%;
    height: 100%;
  }

  .img-container {
    position: relative;
    padding-bottom: calc(2 / 3 * 100%);
  }

  .img-container>* {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .image {
    display: block;
    overflow: hidden;
    border-radius: 1.25rem;
  }

  .image:hover {
    box-shadow: 0 0, 0 0 #0000, 0 0, 0 0 #0000, 0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);
  }

  .image a img {
    height: 100%;
    width: 100%;
    inset: 0px;
    object-fit: cover;
    max-width: 100%;
    color: transparent;
    display: block;
    vertical-align: middle;
  }

  .summary {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .summary a {
    text-decoration: none;
  }

  .summary span {
    color: #707385;
    font-size: 1.0125rem;
    line-height: 150%;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .summary h2 {
    color: var(--txt-clr);
    font-size: 1.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    line-height: 1.25;
    letter-spacing: -.025em;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .summary p {
    color: #707385;
    font-size: 1.0125rem;
    line-height: 150%;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  @media (max-width: 1024px) {
    .grid-item {
      grid-column: span 6/span 6;
    }
  }

  @media (max-width: 550px) {
    .grid-item {
      grid-column: span 12/span 12;
    }
  }

  @media (max-width: 387px) {
    .grid-item {
      grid-column: 1/13;
    }
  }


  
</style>