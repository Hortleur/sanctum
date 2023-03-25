<script>
    const blogPosts = [
        {
            id: 0,
            title: "Mango Fool",
            content: "Le Mango Fool est un dessert africain populaire, originaire de l'Afrique de l'Ouest, qui est parfait pour les chaudes journées d'été. Ce dessert rafraîchissant est facile à préparer et nécessite peu d'ingrédients. Il est également très polyvalent et peut être personnalisé en fonction de vos goûts.\n" +
                "\n" +
                "                    Le Mango Fool est traditionnellement préparé en mélangeant de la purée de mangue sucrée avec de la crème fouettée, de la vanille et du sucre. La texture légère et crémeuse du dessert est ce qui le rend si populaire auprès des gourmands. Vous pouvez également ajouter d'autres fruits à la recette, comme des fraises ou des kiwis, pour ajouter une touche de couleur et de saveur supplémentaires.\n" +
                "\n" +
                "                    Pour préparer le Mango Fool, commencez par peler et couper les mangues en petits morceaux. Ensuite, placez-les dans un mixeur et mélangez jusqu'à obtenir une purée lisse. Dans un bol séparé, fouettez la crème fraîche avec le sucre et la vanille jusqu'à obtenir une texture ferme et crémeuse. Incorporez ensuite délicatement la purée de mangue à la crème fouettée.\n" +
                "\n" +
                "                    Placez le mélange dans des verrines ou des coupes à dessert, puis placez-les au réfrigérateur pendant au moins deux heures pour que le mélange prenne une texture plus ferme. Au moment de servir, ajoutez une touche de crème fouettée et de fruits frais pour une présentation plus festive.\n" +
                "\n" +
                "                    Le Mango Fool est un dessert délicieux et facile à préparer qui est parfait pour les repas d'été. Sa texture légère et crémeuse et son goût sucré de mangue sont un vrai délice pour les papilles. Essayez cette recette simple et rapide pour un dessert africain authentique et savoureux.\n",
            image: "images/Mango_fool.webp",
            date: "2021-06-01",
            author: "Aminata",
        }
    ]
</script>

<main class="pt-20 ">
    <h1 class="text-4xl text-center underline-offset-4 underline font-chivo mb-5">Blog</h1>
    <section class="bg-prim-grey py-5">
        <h2 class=" font-chivo text-3xl pl-5 underline mb-5">Bienvenue sur notre page blog !</h2>
        <p class="pl-2">Ici, vous trouverez une variété d'articles sur les desserts africains, les tendances culinaires, les recettes, les histoires d'entrepreneurs, et bien plus encore. Notre équipe d'auteurs passionnés vous apporte des articles frais et inspirants chaque semaine. N'hésitez pas à explorer notre collection et à vous abonner à notre newsletter pour rester à jour avec les dernières nouvelles.</p>
    </section>
    <section class="py-5">
        {#each blogPosts as post}
            <div class="card w-11/12 mx-auto shadow-lg">
                <figure>
                    <img src="{post.image}" alt="{post.title}">
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{post.title}</h2>
                    <p class="text-justify">{post.content}</p>
                    <div class="flex flex-row justify-between items-end">
                        <p>{post.date}</p>
                        <p>{post.author}</p>
                    </div>
                </div>
            </div>
        {/each}

    </section>
</main>