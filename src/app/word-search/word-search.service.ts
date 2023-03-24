import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WORDS } from './words';

@Injectable({
    providedIn: 'root'
})
export class WordSearchService {
    private wordsList = WORDS;

    searchWord(term: string) : Observable<string[]> {
        term = term.trim().toLowerCase();
        if(!term) {
            return of([]);
        }
        return of(this.wordsList.filter(word => word.includes(term)));
    }
}
