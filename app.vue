<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css';
</style>

<script setup>
// const { $auth, $db, $storage } = useNuxtApp();

watchEffect(() => {
    const user = useFirebaseUser();
    console.log('watchEffect - auth', user.value?.uid);
    if(user.value){
        useGetUser(user);
    }
});
</script>