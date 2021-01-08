import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'annonce',
    loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'annonces',
    loadChildren: () => import('./annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'annoncer',
    loadChildren: () => import('./annoncer/annoncer.module').then( m => m.AnnoncerPageModule)
  },
  {
    path: 'perdu',
    loadChildren: () => import('./perdu/perdu.module').then( m => m.PerduPageModule)
  },
  {
    path: 'trouve',
    loadChildren: () => import('./trouve/trouve.module').then( m => m.TrouvePageModule)
  },
  {
    path: 'bureau',
    loadChildren: () => import('./bureau/bureau.module').then( m => m.BureauPageModule)
  },
  {
    path: 'phototheque',
    loadChildren: () => import('./phototheque/phototheque.module').then( m => m.PhotothequePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
