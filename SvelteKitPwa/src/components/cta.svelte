<script>
import trailers from '../data/trailers.json'
</script>
<style>
    .ctas{
        margin-top: 50px;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-gap: 75px;
        margin-bottom: 50px;
    }
    .ctas .cta-link{
        color: unset;
        text-decoration: none;
        transition: 0.3s;
    }
    .ctas .cta-link:hover{
        transform: scale(1.1);
    }
    .ctas .cta{
       box-shadow: 7px 7px 14px #bfbfbf;
       border-radius: 10px;
       overflow: hidden;
    }
    .ctas .cta-img{
        background-image: url(../../static/trailer.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 200px;
    }

    .cta-info{
        padding: 20px;
    }
    .cta-info h3{
        font-size: 26px;
        margin-top: 0px;
    }
    @media screen and (max-width: 1030px){
        .ctas{
        grid-template-columns: 45% 45%;
        }
    }
</style>
<div class="ctas">
    {#each trailers as trailer}
    <a class="cta-link" href="/trailers/{trailer.id}">
        <div class="cta">
            <div class="cta-img"></div>
            <div class="cta-info">
                <h3 class="cta-title">{trailer.title}</h3>
                <p class="cta-text">{trailer.price}</p>
            </div>
        </div>
    </a>
    {/each}
</div>
