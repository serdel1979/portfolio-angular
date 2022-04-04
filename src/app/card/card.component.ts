import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string;
  constructor() { }

  ngOnInit(): void {
    this.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKgGYbcXiVqr_p0XoI5Coee_ld2j3fjEGVA&usqp=CAU"
  }

}
