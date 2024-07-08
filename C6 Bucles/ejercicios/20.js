function sumarHastaNConBreak(n) {
   let suma = 0;
   
   for (let i = 1; i <= n; i++) {
     suma += i;
     
     // Detener el bucle si la suma supera 100
     if (suma > 100) {
       break;
     }
   }
   
   return suma;
 }
 
 module.exports = sumarHastaNConBreak;
 