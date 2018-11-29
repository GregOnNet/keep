import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
  imports: [CommonModule, MatToolbarModule]
})
export class SearchModule {}
