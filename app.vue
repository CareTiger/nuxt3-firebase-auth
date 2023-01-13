<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
</style>

<script setup>
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
// const { $auth, $db, $storage } = useNuxtApp();

watchEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        useGetUser(user);
    });
    // console.log('watchEffect - auth', $auth);
    // console.log('watchEffect - db', $db);
    // console.log('watchEffect - storage', $storage);
});
</script>