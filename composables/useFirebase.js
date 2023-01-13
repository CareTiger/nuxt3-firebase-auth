import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';

export const createUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
};

export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
};

export const initUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    const userCookie = useCookie('userCookie');

    console.log('initUser', firebaseUser.value);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            firebaseUser.value = user;
            console.log('user is signed in');
            console.log('uid', user.uid);
        } else {
            // User is signed out
            // ...
            firebaseUser.value = null;
            console.log('user is logged out');
        }
        userCookie.value = user; // set user cookie
    });
};

export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    navigateTo('/');
    console.log(result);
    return result;
};
