import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ContactComponent } from './home/contact/contact.component';


const routes: Routes = [
  { path: "", component: ContactComponent },
  { path: "fab", component: ContactComponent }

];

// existActicity/${i}/${item}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
