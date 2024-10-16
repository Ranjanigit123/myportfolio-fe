import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component'; // adjust the path based on your project structure
//import { AboutComponent } from './about/about.component'; // adjust the path based on your project structure
import { ContactComponent } from './contact/contact.component'; // adjust the path based on your project structure

const routes: Routes = [
  //{ path: '', component: HomeComponent },  // Default route (Home)
  //{ path: 'about', component: AboutComponent },  // Route to About page
  { path: 'contact', component: ContactComponent },  // Route to Contact page
  // Add more routes for other components as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
