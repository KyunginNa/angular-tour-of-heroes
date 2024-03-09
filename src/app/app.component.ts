import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeroesComponent, MessageComponent, RouterOutlet, RouterLink],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
