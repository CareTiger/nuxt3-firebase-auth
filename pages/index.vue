<template>
    <div>
        <div v-if="firebaseUser">
            <ul>
                <li>
                    <NuxtLink to="/secret">Go to Secret Page</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/documents">Documents</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/storage">Storage</NuxtLink>
                </li>
            </ul>
            <div v-if="firebaseUser">
                <client-only>
                    <pre style="white-space: pre-wrap; word-break: keep-all;">{{ firebaseUser }}</pre>
                </client-only>
            </div>
        </div>
        <div v-else>
            <LandingPage />
        </div>
    </div>
</template>

<script setup>
const firebaseUser = useFirebaseUser();
</script>
