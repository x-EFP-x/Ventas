import { Component } from '@angular/core';
import { Product } from './product.model'; //Para poder tipar y asegurar que un objeto de nuestro programa sea instanciado en memoria correctamente, es correcto crear un modelo para nuestros objetos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//Esta linea de codigo conecta nuestro modulo con el html
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Edwin';// para que se pueda acceder a estas variables desde el html, deben ser publicas
  age = 19;
  img = 'https://i.pinimg.com/236x/1a/b8/3d/1ab83d28195b5219b0f3c855edb5c24f.jpg';
  btnDisabled = false;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name : 'Edwin',
    age : 19,
    avatar: 'https://i.pinimg.com/236x/1a/b8/3d/1ab83d28195b5219b0f3c855edb5c24f.jpg'
  }
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  names: any[] = ['Edwin', 'Felipe', 'Michell', 'Adriana', 12, 23, 45];
  newName = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled
  }

  ageIncrease(){
    this.person.age += 1;
  }
  //Se accede a estas funciones con los eventos
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    //El HTMLelement se usa cuando son eventos nativos de HTML
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    //El HTMLInputElement se usa cuando son eventos de input HTML
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }

  onRegister(){
    console.log(this.register)
  }

  products: Product[] = [
    {
      name: 'crucial 1 tb',
      price: 195000,
      image: './assets/images/1_tb_crucial.png'
    },
    {
      name: '16 GB ram silicon power',
      price: 155000,
      image: './assets/images/ram silicon power.jpg'
    },
    {
      name: 'rx 6750 xt',
      price: 2000000,
      image: './assets/images/rx 6750 xt.jpg'
    },
    {
      name: 'ryzen 5 5600',
      price: 195000,
      image: './assets/images/ryzen 5 5600.jpg'
    },
    {
      name: 'rainbow 6 seige',
      price: 195000,
      image: './assets/images/r6.jpg'
    },
    {
      name: 'resident evil village',
      price: 195000,
      image: './assets/images/re 8.png'
    },
  ];
}