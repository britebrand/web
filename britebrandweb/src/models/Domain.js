import _ from 'lodash';
import store from './../store/Store';

const fonts = ['Bungee', 'Comfortaa', 'Faster One', 'Lily Script One', 'Lobster', 'Righteous', 'Slackey', 'Zilla Slab Highlight'];

class Domain {
    
    constructor(name, price) {
        this.name = name;
        this.displayName = name.replace('*', '.')
        this.price = price;
        this.font = _.sample(fonts);
    }

    get toAdd() {
        return !_.includes(store.selectedDomains, this);
    }

}

export default Domain;