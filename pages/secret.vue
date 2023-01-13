<template>
    <div>
        <p>You can view the Secret page because you are logged in.</p>
        <p>Server secret: {{ serverSecret }}</p>
        <pre>{{ firebaseUser }}</pre>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth'],
});
const firebaseUser = useFirebaseUser();
const serverSecret = await useFetch('/api/secret');
</script>
