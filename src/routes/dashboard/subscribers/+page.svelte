<script>

    export let data
</script>

<main>
    <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
            </thead>
            <tbody>
                {#if data.subscribers.length === 0}
                    <tr>
                        <td colspan="3" class="text-center">No subscribers yet</td>
                    </tr>
                {/if}
                {#each data.subscribers as subscriber}
                    <tr>
                        <td>{subscriber.email}</td>
                        <td>{new Intl.DateTimeFormat('fr-FR').format(subscriber.createdAt)}</td>
                        <td>
                            <form action="?/deleteSub" method="POST">
                                <input type="hidden" name="id" value="{subscriber.id}" >
                                <button class="btn btn-error"><i class="fa-solid fa-dumpster-fire mr-2 text-black"></i> Delete</button>
                            </form>
                        </td>
                    </tr>
                {/each}
        </table>
    </div>
</main>