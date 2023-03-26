<script>
    export let data
</script>

<main>
    <div></div>
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
                    <td>{dessert.description}</td>
                    <td><img src="{dessert.picture}" alt="{dessert.name}" width="100px"></td>
                    <td>{new Intl.DateTimeFormat('fr-FR').format(dessert.createdAt)}</td>
                    <td>
                        <form action="?/deleteSub" method="POST">
                            <input type="hidden" name="id" value="{dessert.id}" >
                            <button class="btn btn-error"><i class="fa-solid fa-dumpster-fire mr-2 text-black"></i> Delete</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
</main>