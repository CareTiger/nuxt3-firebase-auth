<template>
    <div class="p-8">
        <div class="has-text-centered my-2">
            <p class="text-xl">Firebase/Nuxt3 Auth</p>
        </div>
        <ul class="flex flex-row justify-between space-x-6">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li v-if="!user">
                <NuxtLink to="/firebase">Sign up / Login</NuxtLink>
            </li>
            <li v-if="user">
                <NuxtLink to="" @click="signOut">Sign out</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
const user = useFirebaseUser();
const signOut = async () => {
    await signOutUser();
};
</script>
