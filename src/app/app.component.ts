import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  public listaVideos: Array<any> = []

  ngOnInit(): void {
    this.listaVideos = [
      {
        tittle: 'Video 1',
        subtittle: 'Subtitulo del video 1',
        img: "https://i.ytimg.com/vi/3USuGvpZYsc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC19ilijlch80j9aKrue-lhPqczjw"
      },
      {
        tittle: 'Video 2',
        subtittle: 'Subtitulo del video 2',
        img:"https://i.ytimg.com/vi/ozv8ugNm0P0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDc0jifW3dRngZuFFKSFg2-Sl6L7Q"
      },
      {
        tittle: 'Video 3',
        subtittle: 'Subtitulo del video 3',
        img:"https://i.ytimg.com/vi/MTmZJ4euPes/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAypgKtRcwIzupvijfL8fyPu1ujMQ"
      }
    ]
  }


}
