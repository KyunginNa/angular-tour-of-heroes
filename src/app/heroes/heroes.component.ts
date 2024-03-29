import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [NgFor, NgIf, HeroDetailComponent, RouterLink]
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  add(value: string) {
    value = value.trim();

    if (!value) {
      return;
    }

    this.heroService.addHero({ name: value } as Hero).subscribe(hero => this.heroes.push(hero))
  }

  delete(id: number) {
    this.heroService.deleteHero(id).subscribe(() => {
      this.getHeroes();
      window.alert("The hero is successfully deleted!")
    })
  }
}
