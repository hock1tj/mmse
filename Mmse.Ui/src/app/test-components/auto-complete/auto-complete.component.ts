import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'cmich-auto-complete',
  templateUrl: './auto-complete.component.html'
})
export class AutoCompleteComponent implements OnInit {

  autocomplete = new FormControl();
  filteredChoices: Observable<string[]>;

  choices: string[] = [
    'Bran Stark',
    'Brienne of Tarth',
    'Bronn',
    'Daenerys Targaryen',
    'Davos Seaworth',
    'Hodor',
    'Jaime Lannister',
    'Joffey Baratheon',
    'Jon Snow'];



  ngOnInit() {

    this.filteredChoices = this.autocomplete.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val as string))
      );
  }

  filter(str: string): string[] {
    return this.choices.filter(choice =>
      choice.toLowerCase().indexOf(str.toLowerCase()) === 0);
  }

}
