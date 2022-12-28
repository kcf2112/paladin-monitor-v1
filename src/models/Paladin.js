/**
 * Represents a single Paladin unit, presumably deployed to customer premises.
 */
export class Paladin {
  ipAddress = '';
  url = '';
  hostname = '';
  customer = '';
  location = '';
  group = '';
  hasDrive = false;
  driveSize = 0;
  driveSpaceAvail = 0;

  constructor(ipAddress) {
    this.ipAddress = ipAddress;
  }
}