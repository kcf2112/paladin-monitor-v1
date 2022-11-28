import { Paladin } from '../models/Paladin';

/**
 * Service simulator; contains functions that return synthetic 
 * data for demonstration purposes.
 */
const retrievePaladins = () => {
    const plist = [];
    
    var pld = new Paladin('112.223.334.1');
    pld.hostname = 'host-alpha';
    pld.location = 'Alabama';
    pld.customer = 'cust-alpha';
    plist.push(pld);

    pld = new Paladin('112.223.334.2');
    pld.hostname = 'host-bravo';
    pld.location = 'Bismark';
    pld.customer = 'cust-bravo';
    plist.push(pld);

    pld = new Paladin('112.223.334.3');
    pld.hostname = 'host-Charlie';
    pld.location = 'Columbia';
    pld.customer = 'cust-charlie';
    plist.push(pld);
    
    return plist;
  }

  export { retrievePaladins };