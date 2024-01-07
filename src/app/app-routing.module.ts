import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { formDirtyGuard } from './form-dirty.guard';
import { LoaderComponent } from './components/loader/loader.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{
  path:'contact',
  component:ContactComponent,
  canDeactivate:[formDirtyGuard]
},
{
  path:'admin',
  
  component:AdminComponent
},

{
path: 'loader',

component: LoaderComponent

},
{
  path:'dashboard',

  component: DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
