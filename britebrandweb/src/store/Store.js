import { observable } from 'mobx';
import _ from 'lodash';

/**
 * This class handles all api interactions and internal state 
 */
class Store {

    @observable loading;

}

var singleton = new Store();
export default singleton;