import { Component, OnInit } from '@angular/core';

import { RecipyService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipyService]
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

}
