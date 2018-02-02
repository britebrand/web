import { observable } from 'mobx';
//import _ from 'lodash';
import * as firebase from 'firebase';

/**
 * This class handles all api interactions and internal state 
 */
class Store {

    @observable loading = false;
    @observable availableURLs = null;
    @observable selectedURLs = null;

    constructor(props) {
        this.initFirebase();
        this.database = firebase.database();
    }

    initFirebase() {
        const config = {
            apiKey: "AIzaSyBbcrMDYfGVpG2EXN1BlCE1ranTs5twKAQ",
            authDomain: "brite-brand.firebaseapp.com",
            databaseURL: "https://brite-brand.firebaseio.com",
            projectId: "brite-brand",
            storageBucket: "brite-brand.appspot.com",
            messagingSenderId: "441037694481"
        };
        firebase.initializeApp(config);
    }

    getAvailableURLs() {
        this.loading = true;
        return this.database.ref('/unsold').once('value').then(snapshot => {
            console.log(snapshot.val())
        }).finally(this.loading = false)
    }

}

var singleton = new Store();
export default singleton;