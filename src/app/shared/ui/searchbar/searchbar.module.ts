import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
      CommonModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule,
      MatButtonModule,
    ],
    declarations: [SearchbarComponent],
    exports: [
      SearchbarComponent,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      FormsModule,
      MatButtonModule,
    ],
})
export class SearchbarComponentModule {}
