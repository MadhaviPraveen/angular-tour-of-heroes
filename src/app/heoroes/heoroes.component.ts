import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heoroes',
  templateUrl: './heoroes.component.html',
  styleUrls: ['./heoroes.component.css']
})

export class HeoroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }
  ngOnInit() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
