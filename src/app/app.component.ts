import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  public cards: Array<any> = []

  ngOnInit(): void {
    this.cards = [
      {
        tittle: 'Video 1',
        subtittle: 'Subtitulo del video 1'
      },
      {
        tittle: 'Video 2',
        subtittle: 'Subtitulo del video 2'
      },
      {
        tittle: 'Video 3',
        subtittle: 'Subtitulo del video 3'
      }
    ]
  }


}
