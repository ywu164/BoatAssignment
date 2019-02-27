import { Component, OnInit } from '@angular/core';
import {Boat} from '../boat';
import {BoatService} from '../boat.service';
import {DUMMY_DATA2} from '../data/dummy-data2'; 

@Component({
  selector: 'app-boat-functions',
  templateUrl: './boat-functions.component.html',
  styleUrls: ['./boat-functions.component.css']
})
export class BoatFunctionsComponent {
  selected: Boat;
  characters: Promise<Boat[]>;
  constructor(private BoatService: BoatService) { }
  onSelect(boat: Boat): void {
    this.selected = boat;
  }
  getBoats(): void {
    this.characters = this.BoatService.getBoats();
  }
  ngOnInit(): void {
    this.getBoats();
  }
    boat1: Boat = {
      BoatId: 1,
      BoatName:"",
      Picture: "",
      LengthInFeet: "",
      Make: "",
      Description: ""
    };
    boats = DUMMY_DATA2;
}
