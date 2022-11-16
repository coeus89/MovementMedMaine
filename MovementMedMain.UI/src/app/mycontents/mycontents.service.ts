import { Injectable } from '@angular/core';
import { InsuranceProvider } from '../Models/ui-models/insuranceProviderModel';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MyContentsService {

  private baseAPIUrl = ""
  data: InsuranceProvider[] = []


  constructor() {
    this.data = [
      {position: 1, name: 'Aetna'} as InsuranceProvider,
      {position: 2, name: 'Anthem'} as InsuranceProvider,
      {position: 3, name: 'Anthem Blue Cross Blue Shield'} as InsuranceProvider,
      {position: 4, name: 'Beacon'} as InsuranceProvider,
      {position: 5, name: 'Cigna'} as InsuranceProvider,
      {position: 6, name: 'Humana'} as InsuranceProvider,
      {position: 7, name: 'United Healthcare'} as InsuranceProvider,
      {position: 8, name: 'Medicare*'} as InsuranceProvider,
      {position: 9, name: 'Medicaid*'} as InsuranceProvider,
      {position: 10, name: 'Maine Care*'} as InsuranceProvider,
    ]
  }

  getInsuranceProvicers(): InsuranceProvider[] {

    return this.data;
  }
}
