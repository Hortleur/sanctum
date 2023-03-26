<script lang="ts">
    import {slide, fade} from 'svelte/transition'
    import type {ActionData} from "./$types";
    let addPost = false
    let now = new Date()
    export let data

    export let form: ActionData
</script>

<main>
    <div class="ml-5 mb-10">
        <button class="btn btn-primary" on:click={() => addPost = !addPost}>Ajouter un article</button>
    </div>
    {#if addPost}
        <div in:slide out:slide>
            <form action="?/createPost" method="POST" class="px-2">
                <div class="flex flex-col">
                    <label for="title">Titre</label>
                    <input type="text" name="title" id="title" class="input input-bordered">
                </div>
                <div class="flex flex-col">
                    <label for="content">Contenu</label>
                    <textarea name="content" id="content" class="input input-bordered"></textarea>
                </div>
                <div class="flex flex-row items-center my-2">
                    <label for="published" class="mr-2">Publier ?</label>
                    <input type="checkbox" name="published" id="published" class="checkbox checkbox-sm checkbox-primary">
                </div>
                <div class="flex flex-col">
                    <input type="hidden" name="authorId" value="{data.user.id}">
                </div>
                <div class="flex flex-col">
                    <label for="image" >Lien de l'image</label>
                    <input type="text" name="image" id="image" class="input input-bordered">
                </div>
                <div class="flex flex-col mb-3">
                    <input type="hidden" name="created_at" id="created_at" value="{now}">
                </div>
                <div class="flex">
                    <button type="submit" class="btn btn-primary mr-5">Ajouter</button>
                    <button type="button" class="btn btn-error">Annuler</button>
                </div>
            </form>
        </div>
    {/if}
    {#if !addPost}
    <div class="overflow-x-auto" in:fade out:slide>
        <table class="table w-full">
            <thead>
            <th>Titre</th>
            <th>Contenu</th>
            <th>En ligne</th>
            <th>Auteur</th>
            <th>Créé le</th>
            <th>Actions</th>
            </thead>
            <tbody>
            {#each data.posts as post}
                <tr>
                    <td><a href="/blog/{post.id}" class="underline text-justify whitespace-pre-wrap">{post.title}</a></td>
                    <td>
                        <p class="text-justify line-clamp-2 whitespace-pre-wrap">{post.content}</p>
                    </td>
                    <td>
                        {#if post.published}
                            <i class="fa-solid fa-square-check text-primary"></i>
                            {:else}
                            <i class="fa-solid fa-square-xmark text-error"></i>
                        {/if}
                    </td>
                    <td><p class="italic">{post.author.name}</p></td>
                    <td>{new Intl.DateTimeFormat('fr-FR').format(post.createdAt)}</td>
                    <td>
                        {#if post.published}
                            <form action="?/unPublishPost" method="POST" class="mb-2">
                                <input type="hidden" name="id" value="{post.id}">
                                <button class="btn btn-error">Dépublier</button>
                            </form>
                        {:else}
                            <form action="?/publishPost" method="POST" class="mb-2">
                                <input type="hidden" name="id" value="{post.id}">
                                <button class="btn btn-primary">Publier</button>
                            </form>
                        {/if}
                        <form action="?/deletePost" method="POST" class="mb-2">
                            <input type="hidden" name="id" value="{post.id}">
                            <button class="btn btn-danger">Supprimer</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
    {/if}
</main>