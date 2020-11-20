import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PageInfosComponent } from './page-infos/page-infos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path :'contact', component: ContactComponent},
  {path :'auth', component: AuthComponent},
  {path:'pageInfos',component: PageInfosComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
