<script>

</script>

<main class="pt-20 ">
    <h1 class="text-center text-4xl font-chivo underline underline-offset-4 mb-5">A Propos</h1>
    <section class="bg-prim-grey py-5">
        <h2 class="text-3xl font-chivo underline-offset-4 underline ml-5 my-6">Histoire</h2>
        <p class=" font-chivo pl-5">La fondatrice, une passionnée de cuisine africaine, a découvert le Mango Fool lors d'un voyage dans son pays natal. Elle a décidé de créer une entreprise de desserts africains pour partager les saveurs de son pays et préserver les recettes traditionnelles. En utilisant des ingrédients locaux et en soutenant l'agriculture durable, son entreprise est devenue un acteur important de l'industrie des desserts africains. Aujourd'hui, elle est fière de partager la richesse de la cuisine africaine avec le monde entier, tout en promouvant des valeurs telles que l'authenticité et la durabilité.</p>
    </section>
    <section class="py-5">
        <h2 class="text-3xl font-chivo underline-offset-4 underline ml-5 my-6">L'Equipe</h2>
        <div>
            <div class="card mt-5 w-11/12 mx-auto shadow-lg rounded-lg">
                <figure>
                    <img src="images/femme_africaine.webp" alt="Photo de Ben Masora sur Unsplash">
                </figure>
                <div class="card-body">
                    <h3 class="card-title font-chivo underline underline-offset-4">Fatoumata Keita</h3>
                    <h4 class="text-center">Fondatrice</h4>
                    <p> Fatoumata a grandi dans une famille qui valorisait la cuisine traditionnelle africaine. Après avoir étudié la gastronomie en France, elle a décidé de retourner dans son pays natal pour en apprendre davantage sur les recettes traditionnelles. C'est là qu'elle a découvert le Mango Fool, une recette qu'elle a perfectionnée au fil des ans. Aujourd'hui, elle est fière de partager sa passion pour la cuisine africaine avec le monde entier.</p>
                </div>
            </div>
            <div class="card my-5 w-11/12 mx-auto shadow-lg rounded-lg">
                <figure>
                    <img src="images/femme2.webp" alt="Photo de Christina @ wocintechchat.com sur Unsplash">
                </figure>
                <div class="card-body">
                    <h3 class="card-title font-chivo underline underline-offset-4">Aminata Diallo</h3>
                    <h4 class="text-center">Responsable Marketing</h4>
                    <p>Aminata a grandi au Burkina Faso et a étudié le marketing en France. Elle est passionnée par la promotion des produits africains et travaille activement pour faire connaître les desserts de l'entreprise dans le monde entier. Elle est également responsable de la stratégie de communication de l'entreprise et travaille en étroite collaboration avec l'équipe de conception pour créer des campagnes publicitaires innovantes.</p>
                </div>
            </div>
            <div class="card w-11/12 font-chivo mx-auto shadow-lg rounded-lg">
                <figure>
                    <img src="images/homme.webp" alt="Photo de Shedrack Salami sur Unsplash">
                </figure>
                <div class="card-body">
                    <h3 class="card-title underline underline-offset-4">Mamadou Diop</h3>
                    <h4 class="text-center">Responsable des Opérations</h4>
                    <p> Mamadou a étudié la gestion d'entreprise en Europe avant de rejoindre Sanctum. Il est passionné par les questions de développement durable et a contribué à mettre en place des pratiques commerciales responsables au sein de l'entreprise. Il est également responsable de la production et de la distribution des desserts africains de l'entreprise.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="contact" class="bg-prim-grey py-5">
        <h2 class="text-3xl font-chivo underline-offset-4 underline ml-5 my-6">Contact</h2>
        <form action="" class="glass w-11/12 rounded-lg mx-auto p-5">
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-col w-full md:w-1/2">
                    <label for="name">Nom</label>
                    <input type="text" name="name" id="name" class="input input-primary">
                </div>
                <div class="flex flex-col w-full md:w-1/2">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" class="input input-primary">
                </div>
            </div>
            <div class="flex flex-col">
                <label for="subject">Sujet</label>
                <select name="subject" id="subject" class="select select-bordered select-primary">
                    <option value="Partenaria">Partenariat</option>
                    <option value="Devis">Devis</option>
                    <option value="Autre">Autre</option>
                </select>
            </div>

            <div class="flex flex-col">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" class="input input-primary"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-5">Envoyer</button>
        </form>
    </section>
</main>