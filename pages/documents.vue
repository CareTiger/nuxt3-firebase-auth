<template>
    <div>
        <ul>
            <li class="border border-slate-300 p-4" v-for="doc in orderByDate(data)">
                <p>doc id: {{ doc.id }}</p>
                <pre>data(): {{ doc.data() }}</pre>
                <p>updated: {{ convertDate(doc.data().updated) }}</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {
    collection,
    addDoc,
    getFirestore,
    getDocs,
    query,
    orderBy,
    limit,
} from 'firebase/firestore';
import human from 'human-time';
import _ from 'lodash';

let data = ref([]);
const db = getFirestore();

onMounted(async () => {
    // get documents
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach ((doc) => {
        data.value.push(doc);
    });

    // const authorRef = collection(db, 'users');
    // console.log('authorRef', authorRef);
    // const q = query(authorRef, orderBy("updated", "desc"), limit(3));
    // console.log('q', q);

    // Add a new document.
    try {
        const docRef = await addDoc(collection(db, 'users'), {
            first: 'Ada',
            last: 'Lovelace',
            born: 1815,
            updated: new Date(),
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
});

function convertDate(foo) {
    const formatDate = human(
        new Date(foo.seconds * 1000 + foo.nanoseconds / 1000000)
    );
    return formatDate;
}

function orderByDate(foo) {
    console.log('foo', foo);
    const sorted = _.orderBy(foo, ['updated'], ['desc']);
    return sorted;
}
</script>
