import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from './message/message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeroesComponent, MessageComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
