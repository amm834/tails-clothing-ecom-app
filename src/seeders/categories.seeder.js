import {shop_data} from "./shops.data.js";
import {addDocumentList} from "../lib/firebase/firebase.js";

console.log('seeding categories start')

await addDocumentList('categories', shop_data)

console.log('seeding categories done')
