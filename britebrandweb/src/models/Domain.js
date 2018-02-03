import _ from 'lodash';

const fonts = ['Bungee', 'Comfortaa', 'Faster One', 'Lily Script One', 'Lobster', 'Righteous', 'Slackey', 'Zilla Slab Highlight'];

class Domain {
    
    constructor(name, price) {
        this.name = name;
        this.displayName = name.replace('*', '.')
        this.price = price;
        this.font = _.sample(fonts);
    }

}

export default Domain;