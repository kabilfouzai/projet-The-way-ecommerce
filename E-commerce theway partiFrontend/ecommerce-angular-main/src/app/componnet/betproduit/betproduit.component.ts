import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-betproduit',
  templateUrl: './betproduit.component.html',
  styleUrls: ['./betproduit.component.css']
})
export class BetproduitComponent implements OnInit {
  public produitlitse :any;

  constructor(private app :ProductService) { }

  ngOnInit(): void {
    this.app.getproduit()
    .subscribe(res=>{
    this.produitlitse=res;
    })
  }

}
