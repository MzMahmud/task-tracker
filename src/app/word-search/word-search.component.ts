import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { WordSearchService } from './word-search.service';


@Component({
    selector: 'app-word-search',
    templateUrl: './word-search.component.html',
    styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent implements OnInit {
    words$!: Observable<string[]>;
    private searchTerms = new Subject<string>();

    constructor(private wordSearchService: WordSearchService) { }

    ngOnInit() {
        this.words$ =
            this.searchTerms
                .pipe(
                    debounceTime(300),
                    distinctUntilChanged(),
                    switchMap((term: string) => this.wordSearchService.searchWord(term)),
                );
    }

    search(term: string) {
        this.searchTerms.next(term);
    }
}
