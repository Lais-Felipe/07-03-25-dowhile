function contador(){ // eclara a função "contador" os parênteses vazios significa que não tem parâmetro para ser enviado ou "coletado"
        const tempo = new Date(); // declaração da variável " tempo" somente leitura, a qual receberá o objetivo "Date" do javascript
    //while (document.getElementById("cbxMarcarTempo").checked) {
    //declaração do laço de repedição que está condicionado a executar as linhas dentro do bloco de código ao
    //  checkbox estar marcado
    //setTimeout(contador, 1000);// essa linha conta apenas 1 segundo
        let hora = tempo.getHours(); // declaração da variável "hora" temporária, a qual receberá o retorno do método "getHours"
        let minuto = tempo.getMinutes();//declaração da variável "minuto" temporária, a qual receberá o retorno do método "getMinutes"
        let segundo = tempo.getSeconds();// declaração da variável "segundo" temporária, a qual receberá o retorno do método "getSeconds"

       if (document.getElementById("cbxMarcarTempo").checked == true) { // if é uma condição que vai validar se o cbx.che está marcado
           document.getElementById("div_hora").innerText = hora; // div_hora vai inserir a hora, que pegou do "let hora"
           document.getElementById("div_minuto").innerText = minuto;// div_minuto vai inserir o minuos
           document.getElementById("div_segundo").innerText = segundo;// div_segundo 
        }//chega o bloco de chaves verdadeiro
    setInterval (contador, 1000);// essa linha serve para conat 1 segundo
        if (document.getElementById("cbxMarcarTempo").checked == false) { // ele vai validar se não estiver verificar 
            document.getElementById("div_hora").innerText = "";// ele vai zerar a hora
            document.getElementById("div_minuto").innerText = "";// vai zerar o minuto
            document.getElementById("div_segundo").innerText = "";// vai zerar o segundo
            clearInterval();// ele limpar todos o setInterval
        }// vai encerrar o if blocos de códigos falso
}// vai encerrar o bloco de código da função contador 
//}
document.getElementById ("cbxMarcarTempo").addEventListener ('click', () => {//essa linha do "addEventListener" vai adicionar o evendo click do "cbxMarcarTempo" 
// os sinais "() =>" são uma função aérea
    contador();
});

 //window.setTimeout(contador, 1000); // executa apenas uma vez //
// window.setInterval(contador, 1000); //executa infinitamente 