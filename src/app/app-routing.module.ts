import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarCreateComponent } from './components/guitar-create/guitar-create.component';

const routes: Routes = [
  {
    path: 'guitar/create',
    component: GuitarCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
