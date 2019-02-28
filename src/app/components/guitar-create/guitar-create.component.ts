import { Component, OnInit } from '@angular/core';
import { Guitar } from 'src/app/domain/guitar';

@Component({
  selector: 'app-guitar-create',
  templateUrl: './guitar-create.component.html',
  styleUrls: ['./guitar-create.component.css']
})
export class GuitarCreateComponent implements OnInit {

  guitar: Guitar;

  constructor() { 

  }

  ngOnInit() {
    this.guitar = new Guitar();
  }

  save() : void {
    console.log(`About to save ${this.guitar.type} with price ${this.guitar.price}`);
  }

}
