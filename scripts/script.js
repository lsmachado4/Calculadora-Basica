function Calculadora(num1,num2){        
   //document.getElementById pega um documento que está lincado no html pelo seu ID (identificador). E o Value pega o valor que é direcionado pelo usuário. O <parseFloat> faz um numero que está sendo reconhecido como string ser um número;
   nu1=  parseFloat(document.getElementById("num1").value)
   nu2 = parseFloat(document.getElementById("num2").value)
   seletor = document.getElementById("seletor").value

   switch(seletor){
      case '+':
         calculo = (nu1+nu2)
         document.getElementById("resultado").innerHTML = ` O resultado da soma de ${num1} + ${num2} é: ${calculo}` //innerHTMLBusca elementos HTML 
         break
   }



}

