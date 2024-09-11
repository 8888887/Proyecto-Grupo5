import { Component } from '@angular/core';
import { RouterLink , RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SharedModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PC1';
}
