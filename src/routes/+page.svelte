<script lang="ts">
import {fade} from "svelte/transition";
export let data;
</script>

<main class="bg-prim-grey">
    <section>
        <figure>
            <img src="images/sanctum.svg" alt="Logo Sanctum" class="w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/6 mx-auto">
        </figure>
        <h1 class="text-center text-3xl font-chivo font-bold">Le voyage gustatif en Afrique commence ici !</h1>
    </section>
    <div class="xl:flex xl:flex-row xl:flex-wrap">
        <section class="py-5 xl:w-1/2 xl:order-1">
            <h2 class="text-4xl font-chivo text-center underline underline-offset-4">Dernier dessert</h2>
            <div class="card w-5/6 mx-auto mt-10 rounded-lg shadow-lg bg-prim-grey relative bg-white">
                <span class="badge absolute -top-2 -right-2 badge-primary">New</span>
                <figure>
                    <img src="{data.lastDesserts.picture}" alt="{data.lastDesserts.name}" class="rounded-t-lg max-h-[500px]">
                </figure>
                <div class="card-body">
                    <h3 class="card-title font-chivo">{data.lastDesserts.name}</h3>
                    <p>{data.lastDesserts.description}</p>
                </div>
                <div class="card-actions justify-center mb-5">
                    <a href="/products">
                        <button class="btn btn-primary text-white">Voir plus</button>
                    </a>
                </div>
            </div>
        </section>
        <section class="bg-prim-grey py-5 xl:order-3">
            <h2 class="text-4xl font-chivo text-center underline underline-offset-4">Sanctum</h2>
            <div class="md:flex md:flex-row md:justify-around md:my-5 md:px-4">
                <div class="w-11/12 md:w-2/5 md:h-80 overflow-y-auto mx-auto shadow-lg my-5 md:my-0 bg-white p-4 rounded-xl">
                    <h3 class="font-chivo font-bold">Présentation</h3>
                    <p class="px-4">Notre entreprise est spécialisée dans la fabrication et la distribution de desserts africains authentiques. Nous offrons des produits de qualité, fabriqués à partir d'ingrédients frais et naturels, et servis dans les meilleurs diners. Nous sommes passionnés par la cuisine africaine et nous sommes fiers de partager notre héritage culinaire avec le monde entier.</p>
                </div>
                <div class="w-11/12 md:w-2/5 md:h-80 overflow-y-auto mx-auto shadow-lg bg-white p-4 rounded-xl">
                    <h3 class="font-chivo font-bold">Philosophie</h3>
                    <p class="px-4 font-normal">Notre entreprise croit en la valorisation de la cuisine africaine et de son héritage culinaire unique. Nous nous engageons à préserver la signification culturelle profonde de chaque dessert africain en utilisant des ingrédients frais et naturels de la plus haute qualité. Nous cherchons à inspirer l'émerveillement et la découverte chez nos clients en leur offrant une expérience gustative exceptionnelle. Nous sommes passionnés par la cuisine africaine et fiers de partager notre savoir-faire avec le monde entier.</p>
                </div>
            </div>
            <div class="w-1/2 mx-auto mt-5">
                <a href="/about"><button class="btn btn-primary text-white w-full">A Propos de nous</button></a>
            </div>
        </section>
        <section class="py-5 xl:order-2 xl:w-1/2">
            <h2 class="text-4xl font-chivo text-center underline underline-offset-4 mb-5">Blog</h2>
            <div class="card shadow-md w-11/12 mx-auto relative rounded-lg bg-white shadow-primary">
                <span class="badge absolute -top-2 -right-2 badge-primary">New</span>
                <figure>
                    <img src="{data.lastPosts.image}" alt="{data.lastPosts.title}"  class="rounded-lg max-h-[500px]">
                </figure>
                <div class="card-body">
                    <h3 class="card-title">{data.lastPosts.title}</h3>
                    <p class="whitespace-pre-line line-clamp-5">{data.lastPosts.content}</p>
                </div>
                <div class=" w-1/2 mx-auto mb-5">
                    <a href="/blog"><button class="btn btn-primary w-full text-white">Lire plus !</button></a>
                </div>
            </div>
        </section>

    </div>
    <section class=" py-5">
        <h2 class="text-4xl font-chivo text-center underline underline-offset-4">Newsletter</h2>
        <div class="my-5">
            <p class="text-center">Suivez nos actualités en vous inscrivant à notre newsletter</p>
        </div>
        <form action="?/subscribe" method="POST" class="form-control">
            <div class="input-group justify-center">
                <input type="text" placeholder="E-mail" name="email" class="input input-bordered" />
                <button class="btn btn-primary" type="submit">
                    S'inscrire
                </button>
            </div>
        </form>
    </section>
</main>
