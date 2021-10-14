class App {
    public problema1(){
        console.log("Hola mundo");   
    }

    public problema2(){
    var  Hola = "¡Hola Mundo!"
        console.log(Hola);
    
    }
    public problema3() {
    var  nombre = prompt("Introduce tu nombre: ")
    console.log("¡Hola " + nombre + "!");
    }

    public problema4(){
    
    var nombre: any=prompt("introduce tu nombre");
    var numero : any= prompt("introduce un numero:");
    numero= parseInt(numero);        
    console.log(nombre *  numero);

    }
    public problema5() : void{
     var name = prompt("¿Cómo te llamas? ")
        console.log(name?.toLowerCase());
        console.log(name?.toUpperCase());
        console.log(name?.valueOf());
    }

    public problema6() :void{
    var edad: any = prompt("¿Cuál es tu edad? ");
        
    if(edad<18){
        console.log("Eres menor de edad");
    }else{
     console.log("Eres mayor de edad");   
    }
    }

    public problema7() { 
    var  key = "contraseña"
    var password = prompt("Introduce la contraseña: ")
    if(key == password?.toString()){
        console.log("La contaseña coincide");
   
    } else{
        console.log("La contraseña no coincide");
  
    }
    }

    public problema8(){
    var palabra =prompt("ingresa una palabra")
    console.log(palabra +'\n'+palabra +'\n'+palabra +'\n'+palabra +'\n'+palabra +'\n'+palabra +'\n'+palabra +
    '\n'+palabra +'\n'+palabra +'\n'+palabra +'\n');
    }
    

    public problema9(){
    var  age = prompt("¿Cuántos años tienes? ");
for(i in Range){
    console.log("Has cumplido " + str(i+1) + " años");
   
}
    }
    public problema10(){
    var amount =  prompt("¿Cantidad a invertir? ");
    var interes = prompt("¿Interés porcentual anual? ");
    var años = prompt("¿Años?");
        for (i in Range(años)){
        amount *= 1 + interes / 100 
        console.log("Capital tras " + str(i+1) + " años: " + str(round(amount, 2)))
        }
    }
}

const Examen = new App();
Examen.problema4();