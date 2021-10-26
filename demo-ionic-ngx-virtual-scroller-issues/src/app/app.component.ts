import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  labels = [];
  selectedLabels = [];

  recipes = [];
  recipeFetchBuffer = 25;
  fetchPerPage = 50;
  lastRecipeCount = 0;
  totalRecipeCount: number;

  @ViewChild('contentContainer', { static: true }) contentContainer;
  scrollElement;

  constructor() {
    this.loadRecipes(0, this.fetchPerPage);
  }

  ngAfterViewInit() {
    this.getScrollElement();
  }

  async getScrollElement() {
    this.scrollElement = await this.contentContainer.getScrollElement();
  }

  fetchMoreRecipes(event) {
    const shouldFetchMore = this.lastRecipeCount < event.endIndex + this.recipeFetchBuffer;

    const moreToScroll = this.lastRecipeCount <= this.totalRecipeCount;
    if (shouldFetchMore && moreToScroll) {
      this.loadRecipes(this.lastRecipeCount, this.fetchPerPage);
    }
  }

  async loadRecipes(offset, numToFetch) {
    this.lastRecipeCount += numToFetch;

    const response = await fetch(
      `https://api.recipesage.com/recipes/by-page?folder=main&userId=2e4ed3ea-019f-45f2-a489-7c23554dcf06&sort=-title&count=${numToFetch}&offset=${offset}`
    ).then(response => response.json());

    this.totalRecipeCount = response.totalCount;

    this.recipes = this.recipes.concat(response.data);
  }

}
