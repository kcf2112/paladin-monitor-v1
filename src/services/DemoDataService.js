import { Paladin } from '../models/Paladin';

/**
 * Service simulator; contains functions that return synthetic 
 * data for demonstration purposes.
 */
const retrievePaladins = () => {
    const plist = [];
    
    var pld = new Paladin('112.223.334.1');
    pld.hostname = 'host-alpha';
    pld.location = 'Albany';
    pld.customer = 'cust-alpha';
    plist.push(pld);

    pld = new Paladin('112.223.334.2');
    pld.hostname = 'host-bravo';
    pld.location = 'Bismark';
    pld.customer = 'cust-bravo';
    plist.push(pld);

    pld = new Paladin('112.223.334.3');
    pld.hostname = 'host-charlie';
    pld.location = 'Columbia';
    pld.customer = 'cust-charlie';
    plist.push(pld);
    
    pld = new Paladin('112.223.334.4');
    pld.hostname = 'host-delta';
    pld.location = 'Durham';
    pld.customer = 'cust-delta';
    plist.push(pld);
    
    pld = new Paladin('112.223.334.5');
    pld.hostname = 'host-echo';
    pld.location = 'Everett';
    pld.customer = 'cust-echo';
    pld.hasDrive = true;
    
    plist.push(pld);
    
    pld = new Paladin('112.223.334.6');
    pld.hostname = 'host-foxtrot';
    pld.location = 'Fairfax';
    pld.customer = 'cust-foxtrot';
    pld.hasDrive = true;
    plist.push(pld);

    return plist;
  }

  export { retrievePaladins };