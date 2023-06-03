import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: "", loadComponent: () => import("./main/main.component").then(c => c.MainComponent)},
  {path: "single/:id", loadComponent: () => import("./single/single.component").then(c => c.SingleComponent)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
