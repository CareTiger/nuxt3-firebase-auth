<template>
    <div>
        <section class="hero is-grey is-fullheight is-justify-content-flex-start">
            <div class="section">
                <div class="columns">
                    <div class="column is-4 is-offset-2">
                        <AuthFirebase class="box px-5 py-5 mx-4" title="Register" @submit="register"
                            :form="registerForm" :message="registerMessage" />
                        <AuthFirebase class="box px-5 py-5 mx-4" title="Sign in" @submit="signin" :form="signinForm" />
                    </div>
                    <div class="column is-4" v-if="firebaseUser">
                        <p class="text-center">Firebase Auth Current User</p>
                        <pre>{{ firebaseUser }}</pre>
                    </div>
                    <div class="column is-4 has-text-centered" v-else>
                        <p>User is signed out</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const registerForm = ref({ email: '', password: '' });
const signinForm = ref({ email: '', password: '' });
const firebaseUser = useFirebaseUser();
const registerMessage = ref();

const signin = async () => {
    console.log(signinForm.value);
    await signInUser(signinForm.value.email, signinForm.value.password);
    navigateTo('/');
};

const register = async () => {
    console.log(registerForm.value);
    await createUser(registerForm.value.email, registerForm.value.password);
    navigateTo('/');
};
</script>
