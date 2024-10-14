import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from "./company-list/company-list.component";

@Component({
  selector: 'fbc-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Melbourne firebootcamp-crm';
  date = new Date();

  changeTitle(){
    this.title = 'New Title '+Math.random(); 
  }

}
