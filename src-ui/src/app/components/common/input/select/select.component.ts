import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '../abstract-input';

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }],
  selector: 'app-input-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends AbstractInputComponent<number> {

  constructor() {
    super()
   }

  @Input()
  items: any[]

  @Input()
  textColor: any

  @Input()
  backgroundColor: any

  @Input()
  allowNull: boolean = false

  @Input()
  suggestions: number[]

  @Output()
  createNew = new EventEmitter()

  showPlusButton(): boolean {
    return this.createNew.observers.length > 0
  }

  getSuggestions() {
    if (this.suggestions && this.items) {
      return this.suggestions.filter(id => id != this.value).map(id => this.items.find(item => item.id == id))
    } else {
      return []
    }
  }

}
