import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, PipesModule, ServicesModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
