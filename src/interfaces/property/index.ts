import { AdvertisementInterface } from 'interfaces/advertisement';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  title: string;
  description?: string;
  price: number;
  location: string;
  image?: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  advertisement?: AdvertisementInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    advertisement?: number;
  };
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  image?: string;
  user_id?: string;
  organization_id?: string;
}
