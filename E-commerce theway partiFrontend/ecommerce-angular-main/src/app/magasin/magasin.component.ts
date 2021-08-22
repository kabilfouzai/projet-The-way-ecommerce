import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersComponent } from '../ecommerce/orders/orders.component';
import { ProductsComponent } from '../ecommerce/products/products.component';
import { ShoppingCartComponent } from '../ecommerce/shopping-cart/shopping-cart.component';
import { Category, Product } from '../modal/Modal';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {
  orderFinished = false;
  name: any;
  showSearch = false;
  products: Product[];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;

  @ViewChild('productsC')
  productsC: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC: OrdersComponent;

  public produitlitse :any;

  categories: Category[];

  constructor(private productService: ProductService, private router: Router ,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.productService.getproduit()
    .subscribe(res=>{
      this.produitlitse=res;

      this.produitlitse.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });

    })

    this.categoryService.findAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }
  search() {
    this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
    });
  }

  showUndoBtn(index) {
    this.showBtn = index;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe((product) => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }

}
