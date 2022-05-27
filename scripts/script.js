function calcular(num1, num2) {
   //document.getElementById pega um documento que está lincado no html pelo seu ID (identificador). E o Value pega o valor que é direcionado pelo usuário. O <parseFloat> faz um numero que está sendo reconhecido como string passe a ser reconhecido como um número;
   nu1 = parseFloat(document.getElementById("num1").value)
   nu2 = parseFloat(document.getElementById("num2").value)
   seletor = document.getElementById("seletor").value

   switch (seletor) {
      case '+':
         calculo = (nu1 + nu2)
         document.getElementById("resultado").innerHTML = ` O resultado da soma de ${nu1} + ${nu2} é: ${calculo}` //innerHTMLBusca elementos HTML 
         break

      case '-':
         calculo = (nu1 - nu2)
         document.getElementById("resultado").innerHTML = ` O resultado da subtração de ${nu1} - ${nu2} é: ${calculo}` //innerHTMLBusca elementos HTML 
         break
      case '*':
         calculo = (nu1 * nu2)
         document.getElementById("resultado").innerHTML = ` O resultado da multiplicação de ${nu1} x ${nu2} é: ${calculo}` //innerHTMLBusca elementos HTML 
         break
      case '/':

         calculo = Math.round((nu1 / nu2)) //arredonda o valor da dízima. 
         if (Number.isNaN(calculo)) {
            document.getElementById("resultado").innerHTML = ` Insira divisores válidos!`
         } else
            if (nu2 == 0) {
               document.getElementById("resultado").innerHTML = ` Insira divisor válido!`

            } else {
               document.getElementById("resultado").innerHTML = ` O resultado da divisão de ${nu1} / ${nu2} é: ${calculo}` //innerHTMLBusca elementos HTML 
               break
            }
   }



}
//Colocar calculadora para porcentagem e mudar tema com foto ; e  adicionar atualização automática.
