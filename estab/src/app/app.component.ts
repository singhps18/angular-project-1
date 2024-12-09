import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainComponentComponent } from "./main-component/main-component.component";
import { CarouselPhComponent } from "./carousel-ph/carousel-ph.component";
import { HeaderComponent } from "./shared/layout/header/header.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponentComponent, CarouselPhComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'estab';
}
