import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PancanniDrinksComponent } from './pancanni-drinks/pancanni-drinks.component';
import { PancanniAboutComponent } from './pancanni-about/pancanni-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full'
  },
  {
    path: 'drinks',
    component: PancanniDrinksComponent
  },
  {
    path: 'about',
    component: PancanniAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
