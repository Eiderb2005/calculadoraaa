import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadoraaa';
  data:string ="";
  pressNumber = "";
  history = "";
  lockOperation = false;
  total: number = 0;
  porcentaje: number = 0;
  resultado: number | null = null;
 
  Porcentaje(number:any): void {
    if (this.total !== null && this.porcentaje !== null) {
      this.resultado = (this.porcentaje / 100) * this.total;
    }
  }
  addNumber(number:any):void{
    if(this.data == 'Error'){
      this.data = '';
    }
    this.data += number.innerText;
  }
  operation(op: any):void{
    this.history = op.innerText+' '+this.data
    this.data = ' ';
    this.lockOperation = true;
  }
  deleteData():void{
    this.data = this.data.slice (0, this.data.length -1);
  }
  clear():void{
    this.data = '';
    this.history = '';
    this.lockOperation = false;
  }
  getResult():void{
    let opera = this.history.split(' ');
    switch (opera[0]){
      case '+':
        this.data=(+opera[1] + +this.data).toString()
        this.history ='';
        this.lockOperation = false;
      break; 
      case '-':
        this.data=(+opera[1] - +this.data).toString()
        this.history ='';
        this.lockOperation = false;
      break; 
      case '*':
        this.data=(+opera[1] * +this.data).toString()
        this.history ='';
        this.lockOperation = false;
      break; 
      case '/':
        this.data=(+opera[1] / +this.data).toString()
        this.history ='';
        this.lockOperation = false;
      break; 
      case '%':
        this.data=(+opera[1] % +this.total).toString()
        this.history ='';
        this.lockOperation = false;
        break;
      default:
      this.data = 'Error';
    }
    
  }
}
