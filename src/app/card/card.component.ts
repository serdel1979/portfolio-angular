import { Component, OnInit, Input } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataEntrante: any;

  public image: string;
  constructor(private servicioFavoritos: ServicioDeFavoritosService) { }

  ngOnInit(): void {
    this.image = "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Pink_Floyd_-_The_Endless_River_%28Artwork%29.jpg/220px-Pink_Floyd_-_The_Endless_River_%28Artwork%29.jpg"
  }

  agregarFavorito() {
    this.servicioFavoritos.disparadorDeFavoritos.emit(
      {
        data: this.dataEntrante
      })
  }

}
