import { BusinessSector } from './business-sector';
import { Site } from './site';

export class Partner {
  id: number;
  name: string;
  logo: string;
  businessSector: BusinessSector;
  description: string;
  sites: Site[];
  businessSectorIn: {
    id: string;
    name: string;
    image: string;
  }
  featured: boolean;
}
