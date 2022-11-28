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

  constructor(ipAddress) {
    this.ipAddress = ipAddress;
  }
}