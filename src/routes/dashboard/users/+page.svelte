<script lang="ts">
    import type {ActionData} from "./$types";

    let generatedPwd: string = Math.random().toString(36).slice(-12)
    let copied: boolean = false
    function copy() {
        navigator.clipboard.writeText(generatedPwd)
        copied = true
        setTimeout(() => {
            copied = false
        }, 2000)
    }

    export let data
    export let form: ActionData
</script>
<main class="mt-5">
    {#if form?.success}
        <div class="alert alert-success shadow-lg z-50">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{form.success}</span>
            </div>
        </div>
    {/if}
    {#if form?.invalid}
        <div class="alert alert-error shadow-lg z-50">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>{form.invalid}</span>
            </div>
        </div>
    {/if}
    <div class="mb-5 mx-auto w-3/4">
        <label for="AddUserModal" class="btn btn-primary text-white"><i class="fa-solid fa-user-plus fa-xl mr-2"></i>Ajouter un utilisateur</label>
        <input type="checkbox" id="AddUserModal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box relative">
                <label for="AddUserModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {#if copied}
                    <div class="alert alert-success shadow-lg z-50">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Mot de Passe copier !</span>
                        </div>
                    </div>
                {/if}
                <form action="?/addUser" method="POST">
                    <div>
                        <label for="email">
                            Email
                            <input type="text" name="email" id="email" class="input input-bordered" required>
                        </label>
                    </div>
                    <div>
                        <label for="name">
                            Nom
                            <input type="text" name="name" id="name" class="input input-bordered" required>
                        </label>
                    </div>
                    <div class="my-2">
                        <label for="role" >
                            Role
                            <select name="role" id="role" class="select select-primary" required>
                                {#each data.roles as role}
                                    <option value="{role.id}">{role.name}</option>
                                {/each}
                            </select>
                        </label>
                    </div>
                    <div class="input-group">
                        <label for="password" >
                            Mot de passe
                            <div class=" flex flex-row">
                                <input type="text" name="password" id="password" class="input input-bordered rounded-r-none" value="{generatedPwd}" required>
                                <button class="btn btn-square text-white btn-primary rounded-l-none" type="button" on:click={copy}><i class="fa-regular fa-clipboard"></i></button>
                            </div>
                        </label>
                    </div>
                    <div>
                        <button class="btn btn-primary w-1/2 mt-5" type="submit"><label for="AddUserModal">Ajouter</label></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
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
                        <form action="?/deleteUser" method="POST">
                            <input type="hidden" name="id" value="{user.id}" >
                            <button class="btn btn-error"><i class="fa-solid fa-dumpster-fire mr-2 text-black"></i> Delete</button>
                        </form>
                    </th>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</main>