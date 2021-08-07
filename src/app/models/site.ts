import { Time } from '@angular/common';
import { Address } from './address';
import { Partner } from './Partner';

export class Site {
    id: string;
    partner: Partner;
    address: Address;
    postalCode: string;
    mobilePhone: string;
    officePhone: string;
    opensAt: Time;
    closesAt: Time;
}
