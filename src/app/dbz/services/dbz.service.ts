import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface,';
import { v4 as uuid } from "uuid";

@Injectable({ providedIn: 'root' })
export class DbzService {

    public characters: Character[] = [{
        id:uuid(),name: 'Krillin', power: 1000
    }, {
        id:uuid(),name: 'Goku', power: 9000
    }];
    constructor() { }

    onNewCharacter(character: Character): void {
        const newCharacter:Character= {
            id:uuid(),...character}; 
        this.characters.push(newCharacter);

    }

    onDelete(id:string): void {
        this.characters = this.characters.filter(ch=>ch.id !== id);
    }

}