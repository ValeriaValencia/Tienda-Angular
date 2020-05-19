import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosAPIService } from './productos-api.service';
import { HttpClientModule} from '@angular/common/http';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductosAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
