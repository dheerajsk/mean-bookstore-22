import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  books: BookModel[];

  // Lifecycle hook
  ngOnInit(): void {
  }

}
