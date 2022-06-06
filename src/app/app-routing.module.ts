import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlaskanComponent } from './alaskan/alaskan.component';
import { ChowchowComponent } from './chowchow/chowchow.component';
import { HomeComponent } from './home/home.component';
import { PomeranianComponent } from './pomeranian/pomeranian.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {path:'home',component:HomeComponent},
  {path:'alshkan',component:AlaskanComponent},
  {path:'chowchow',component:ChowchowComponent},
  {path:'Pomeranian',component:PomeranianComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
