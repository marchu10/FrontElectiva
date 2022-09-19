import{ Component } from "@angular/core";

@Component({
    selector: 'app-voter',
    templateUrl: '../voter/voter.component.html'
})
export class VoterComponent{
desabilitar= false;
mensaje = '';
titulo = 'ingeniero';
mostrar = false;

agregarPersona(){
    this.mostrar = true;
    this.mensaje ='persona agregada';
}
/*
modificarTitulo(event:Event){
    console.log('Entrando Método modificarTítulo');
    this.titulo = (<HTMLInputElement>event.target).value
}*/
}