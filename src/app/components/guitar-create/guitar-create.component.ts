import { Component, OnInit } from '@angular/core';
import { Guitar } from 'src/app/domain/guitar';
import { GuitarService } from 'src/app/services/guitar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guitar-create',
  templateUrl: './guitar-create.component.html',
  styleUrls: ['./guitar-create.component.css']
})
export class GuitarCreateComponent implements OnInit {

  guitar: Guitar;

  subscription: Subscription;

  constructor(private guitarService: GuitarService) { 

  }

  ngOnInit() {
    this.guitar = new Guitar();
  }

  save() : void {
   this.subscription =  this.guitarService.save(this.guitar).subscribe(newGuitar => {
     console.log(newGuitar.id+" is saved!!!");
   });
  }

}
