<script lang="ts">
import {fade} from "svelte/transition";
import type {PageData} from "$lib/types";
export let data: PageData

const newProduct: {} = data.newProducts[0]
console.log(newProduct)
</script>

<main>
    <section class="py-5">
        <figure>
            <img src="images/sanctum.svg" alt="Logo Sanctum" class="w-11/12 mx-auto">
        </figure>
        <h1 class="text-center text-3xl font-chivo font-bold">Le voyage gustatif en Afrique commence ici !</h1>
        <div class="card w-5/6 mx-auto mt-10 rounded-lg shadow-lg bg-prim-grey relative">
            <span class="badge absolute -top-2 -right-2 badge-primary">New</span>
            <figure>
                <img src="{newProduct.picture}" alt="{newProduct.name}" class="rounded-t-lg">
            </figure>
            <div class="card-body">
                <h3 class="card-title font-chivo">{newProduct.name}</h3>
                <p>{newProduct.description}</p>
            </div>
            <div class="card-actions justify-center mb-5">
                <a href="/products">
                    <button class="btn btn-primary text-white">Voir plus</button>
                </a>
            </div>
        </div>
    </section>
    <section class="bg-prim-grey py-5">
        <h2 class="text-4xl font-chivo text-center underline underline-offset-4">Sanctum</h2>
        <div>
            <div class="w-11/12 mx-auto my-5 glass px-2 rounded-xl">
                <h3 class="font-chivo font-bold">Présentation</h3>
                <p>Notre entreprise est spécialisée dans la fabrication et la distribution de desserts africains authentiques. Nous offrons des produits de qualité, fabriqués à partir d'ingrédients frais et naturels, et servis dans les meilleurs diners. Nous sommes passionnés par la cuisine africaine et nous sommes fiers de partager notre héritage culinaire avec le monde entier.</p>
            </div>
            <div class="w-11/12 mx-auto glass px-2 rounded-xl">
                <h3 class="font-chivo font-bold">Philosophie</h3>
                <p>Notre entreprise croit en la valorisation de la cuisine africaine et de son héritage culinaire unique. Nous nous engageons à préserver la signification culturelle profonde de chaque dessert africain en utilisant des ingrédients frais et naturels de la plus haute qualité. Nous cherchons à inspirer l'émerveillement et la découverte chez nos clients en leur offrant une expérience gustative exceptionnelle. Nous sommes passionnés par la cuisine africaine et fiers de partager notre savoir-faire avec le monde entier.</p>
            </div>
        </div>
        <div class="w-1/2 mx-auto mt-5">
            <a href="/about"><button class="btn btn-primary text-white w-full">A Propos de nous</button></a>
        </div>
    </section>
    <section class="py-5">
        <h2 class="text-4xl font-chivo text-center underline underline-offset-4 mb-5">Blog</h2>
        <div class="card shadow-lg w-11/12 mx-auto">
            <figure>
                <img src="images/Mango_fool.webp" alt="Mango Fool">
            </figure>
            <div class="card-body">
                <h3 class="card-title">Le Mango Fool : un dessert africain rafraîchissant et facile à préparer</h3>
                <p class="whitespace-pre-line line-clamp-5">Le Mango Fool est un dessert africain populaire, originaire de l'Afrique de l'Ouest, qui est parfait pour les chaudes journées d'été. Ce dessert rafraîchissant est facile à préparer et nécessite peu d'ingrédients. Il est également très polyvalent et peut être personnalisé en fonction de vos goûts.

                    Le Mango Fool est traditionnellement préparé en mélangeant de la purée de mangue sucrée avec de la crème fouettée, de la vanille et du sucre. La texture légère et crémeuse du dessert est ce qui le rend si populaire auprès des gourmands. Vous pouvez également ajouter d'autres fruits à la recette, comme des fraises ou des kiwis, pour ajouter une touche de couleur et de saveur supplémentaires.

                    Pour préparer le Mango Fool, commencez par peler et couper les mangues en petits morceaux. Ensuite, placez-les dans un mixeur et mélangez jusqu'à obtenir une purée lisse. Dans un bol séparé, fouettez la crème fraîche avec le sucre et la vanille jusqu'à obtenir une texture ferme et crémeuse. Incorporez ensuite délicatement la purée de mangue à la crème fouettée.

                    Placez le mélange dans des verrines ou des coupes à dessert, puis placez-les au réfrigérateur pendant au moins deux heures pour que le mélange prenne une texture plus ferme. Au moment de servir, ajoutez une touche de crème fouettée et de fruits frais pour une présentation plus festive.

                    Le Mango Fool est un dessert délicieux et facile à préparer qui est parfait pour les repas d'été. Sa texture légère et crémeuse et son goût sucré de mangue sont un vrai délice pour les papilles. Essayez cette recette simple et rapide pour un dessert africain authentique et savoureux.</p>
            </div>
            <div class=" w-1/2 mx-auto mb-5">
                <a href="/blog/post/"><button class="btn btn-primary w-full text-white">Lire plus !</button></a>
            </div>
        </div>
    </section>
    <section class="bg-prim-grey py-5">
        <h2 class="text-4xl font-chivo text-center underline underline-offset-4">Newsletter</h2>
        <div class="my-5">
            <p class="text-center">Suivez nos actualités en vous inscrivant à notre newsletter</p>
        </div>
        <div class="form-control">
            <div class="input-group justify-center">
                <input type="text" placeholder="E-mail" class="input input-bordered" />
                <button class="btn btn-primary">
                    S'inscrire
                </button>
            </div>
        </div>
    </section>
</main>
