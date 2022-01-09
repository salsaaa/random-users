import { Coordinates } from './coordinates.model';
import { Street } from './street.model';
import { TimeZone } from './timezone.mode';

export class Location {
  street: Street;
  city: String;
  state: String;
  country: String;
  postcode: String;
  coordinates: Coordinates;
  timezone: TimeZone;
}
