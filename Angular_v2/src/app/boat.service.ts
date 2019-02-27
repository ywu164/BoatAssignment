import { Injectable } from '@angular/core';
import {DUMMY_DATA2} from './data/dummy-data2';
import {Boat} from './boat'

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class BoatService {

  constructor() { }
  getBoats(): Promise<Boat[]> {   
    return Promise.resolve(DUMMY_DATA2);
  }
}
