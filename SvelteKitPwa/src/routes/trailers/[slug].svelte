<script>
import { page } from '$app/stores';

    import trailers from '../../data/trailers.json'
    let id = parseInt($page.params.slug)
    let trailer = trailers.find(trailer => trailer.id === id)
    </script>
    <style>
        h1{
            margin-top: 50px;
            font-size: 48px;
        }
    </style>
    
    <div class="container">
        <h1>Trailer {trailer.id}</h1>
        <p>{trailer.description}</p>
    </div>