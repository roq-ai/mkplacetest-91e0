import { UserInterface } from 'interfaces/user';
import { PropertyInterface } from 'interfaces/property';
import { GetQueryInterface } from 'interfaces';

export interface AdvertisementInterface {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  user_id?: string;
  property_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  property?: PropertyInterface;
  _count?: {};
}

export interface AdvertisementGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  user_id?: string;
  property_id?: string;
}
