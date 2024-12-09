import { Component } from '@angular/core';
import { LogingComponent } from "../../../loging/loging.component";

@Component({
  selector: 'app-header',
  imports: [LogingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
