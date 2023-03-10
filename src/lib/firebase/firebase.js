import {initializeApp} from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import {
    collection,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTn4wOTc1EnK4xNtZ173i-c2hAvAFJKlc",
    authDomain: "nero-2f8a2.firebaseapp.com",
    projectId: "nero-2f8a2",
    storageBucket: "nero-2f8a2.appspot.com",
    messagingSenderId: "959203950777",
    appId: "1:959203950777:web:73f14fd768918aae225b68"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()


export const addDocumentList = async (collectionName, documentList) => {
    const collectionRef = collection(db, collectionName)
    const batch = writeBatch(db)

    documentList.forEach(document => {
        const docRef = doc(collectionRef, document.title.toLowerCase())
        batch.set(docRef, document)
    })

    await batch.commit()
}


export const getAllCategories = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};


export const createUserFromGoogleAuth = async (userAuth, additionalInfo = {}) => {
    // create user with user's unique id
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)

    // if user is not exist, create user
    if (!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log("User create: " + error.message)
        }

        return userDocRef
    }

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthUserStateChange = (cb) => onAuthStateChanged(auth, cb)