<script lang="ts">
    export let data
</script>
<main class="mt-5">
    <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr class="text-gray-700 dark:text-gray-400">
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Role</th>
                    <th class="px-4 py-3">actions</th>
                </tr>
            </thead>
            <tbody>
            {#each data.users as user}
                <tr>
                    <th>{user.name}</th>
                    <th>{user.role.name}</th>
                    <th>
                        <button class="btn btn-danger"><i class="fa-solid fa-dumpster-fire mr-2"></i> Delete</button>
                    </th>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</main>