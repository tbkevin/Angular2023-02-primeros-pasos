import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface,';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output() onDelete:EventEmitter<string> = new EventEmitter();
  @Input('characterList') public characterData: Character[] = [];

  onDeleteCharacter(id:string):void {
    this.onDelete.emit(id);
  }
}
