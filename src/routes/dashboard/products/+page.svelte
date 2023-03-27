<script>
    let addProduct = false
    export let data
</script>

<main>
    <div>
        <button class="btn btn-primary my-5" on:click={() => addProduct = !addProduct}>Ajouter un dessert</button>
    </div>
    {#if !addProduct}
    <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
            <th>Nom</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date</th>
            <th>Actions</th>
            </thead>
            <tbody>
            {#each data.desserts as dessert}
                <tr>
                    <td>{dessert.name}</td>
                    <td class="whitespace-pre-wrap">{dessert.description}</td>
                    <td><img src="{dessert.picture}" alt="{dessert.name}" width="100px"></td>
                    <td>{new Intl.DateTimeFormat('fr-FR').format(dessert.createdAt)}</td>
                    <td>
                        <form action="?/deleteProduct" method="POST">
                            <input type="hidden" name="id" value="{dessert.id}" >
                            <button class="btn btn-error"><i class="fa-solid fa-dumpster-fire mr-2 text-black"></i> Delete</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
    {/if}
    {#if addProduct}
        <form action="?/createProduct" method="POST" class="flex flex-col gap-4">
            <input type="text" name="name" placeholder="Nom du dessert" class="input input-bordered">
            <textarea name="description" placeholder="Description du dessert" class="input input-bordered"></textarea>
            <input type="text" name="picture" placeholder="Image du dessert" class="input input-bordered">
            <button class="btn btn-primary">Ajouter</button>
        </form>
    {/if}
</main>