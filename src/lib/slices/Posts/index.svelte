<script>
  /** @type {import("@prismicio/client").Content.PostsSlice} */
  export let slice;
</script>

<section>
  {#each slice.items as item}
    <ul>
      <li>
        <a href="/{item.post.uid}">
          <div>
            <img src="{item.post.data.foto.url}" alt="">
          </div>
          <h2>{item.post.data.title}</h2>
          <p>{item.post.data.beschrijving[0].text}</p>
          <span>door {item.post.data.auteur}</span>
        </a>
      </li>
    </ul>
  {/each}
</section>

<!-- <pre>
  {JSON.stringify(slice,null,2)}
</pre> -->