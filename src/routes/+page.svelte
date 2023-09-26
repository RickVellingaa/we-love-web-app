<section class="home-container">
    <div class="container">
        <div class="grid">
            <div class="content-text">
                <h1>We 💙 Web <span>Blog</span></h1>
                <p>Dit is een blog waarop ik mijn aantekeningen deel over de We 💙 Web lezingen!</p>
                <div class="links">
                    <p>Links</p>
                    <div>
                        <a href="/posts">
                            <img src="pencil-outline.svg" alt="">
                        </a>
                        <a target="_blank" href="https://github.com/RickVellingaa?tab=repositories">
                            <img src="planet-outline.svg" alt="">
                        </a>         
                    </div>
                </div>
            </div>
            <div class="content-image">
                <img src="blogsvg.svg" alt="">
            </div>
        </div>
    </div>
  </section>
  
  <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400&display=swap');
    
      :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .home-container {
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

      .grid {
        display: grid;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
      }

      .content-text {
        place-self: center;
      }

      .content-text div p {
        font-size: 1.0125rem;
        color: var(--txt-clr);
      }

      .content-image{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content-text h1 {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 4.5rem;
        line-height: 1.142;
        font-weight: 700;
      }

      .content-text span {
        color: var(--main-clr);
        display: block;
      }

      .content-text p {
        font-family: 'Plus Jakarta Sans', sans-serif;
        color: #707385;
        display: block;
        font-size: 1.375rem;
        line-height: 1.555;
        margin-top: 1.5rem;
      }

      .links {
        gap: 2em;
        display: flex;
        flex-direction: column;;
      }

      .links img {
        width: 28px;
        aspect-ratio: 1/1;
      }

      .links div {
        display: flex;
        gap: 2em;
      }

      .links div a {
        color: var(--main-clr);
        padding: .75em;
        background-color: #f8f8fa;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 1380px) {
        .content-image img{
            max-width: 500px;
            width: 100%;
        }
      }

      @media (max-width: 1180px) {
        .grid{
            grid-template-columns: 1fr 1fr;
        }
        .content-text h1 {
            font-size: 3.5em;
        }
    }

    @media (max-width: 685px) {
        .grid{
            grid-template-columns: 1fr;
        }
        .content-text h1 {
            font-size: 3.5em;
        }
        .content-image {
            margin-top: 1em;
        }
    }


    

  </style>