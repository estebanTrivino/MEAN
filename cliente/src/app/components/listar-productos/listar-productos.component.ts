import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from "../../services/producto.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

  listProductos: Producto[] = [];
  constructor(private productoService: ProductoService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.listProductos = data;
      console.log(data);
    }, error => {
      console.log(error)
    })
  }

  eliminarProducto(id: any) {
    this.productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado correctamente.', "Producto Eliminado");
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }
}
