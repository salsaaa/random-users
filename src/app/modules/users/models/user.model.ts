import { Location } from './location/location.model';
import { Name } from './name.model';
import { Dob } from './dob.model';
import { Registered } from './registered.model';
import { Picture } from './picture.model';

export class User {
  name: Name;
  gender: String;
  location: Location;
  email: String;
  dob: Dob;
  registered: Registered;
  phone: String;
  picture: Picture;
  nat: String;
}
