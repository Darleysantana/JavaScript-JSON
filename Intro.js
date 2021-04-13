var Numero_inteiro;
var apresentar;
var resto;
var dezena_inteira;
var centena_inteira;
var mil_inteiro;
var dmil_inteiro;
var requestURL = 'extenso.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
Numero_inteiro = window.document.getElementById('numerointeiro');
function transcrever(){
    if(Numero_inteiro <= 19)
    {
        apresentar = (U_ecasadodez[Numero_inteiro]);
    }
    if(Numero_inteiro <= 99 || Numero_inteiro >= 20){
        resto = (Numero_inteiro%10)
        parseInt(dezena_inteira) = Numero_inteiro/10-2;
        apresentar = (dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro == 100){
        apresentar = (casadocem[0]);
    }
    if(Numero_inteiro >= 101 || Numero_inteiro <= 199){
        for(resto >= 11 || resto <= 19){
            resto = (Numero_inteiro%100);
            parseInt(dezena_inteira) = (Numero_inteiro%100)/10-2;
            apresentar = (casadocem[1]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
        }
            resto = ((Numero_inteiro%100)%10);
            parseInt(dezena_inteira) = (Numero_inteiro%100)/10-2;
            apresentar = (casadocem[1]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro > 200 || Numero_inteiro <= 999){
        for(resto >= 11 || resto <= 19)
        {
            resto = (Numero_inteiro%100);
            parseInt(dezena_inteira) = (Numero_inteiro%100)/10-2;
            apresentar = (casadocem[1]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
        }
        resto = ((Numero_inteiro%100)%10);
        parseInt(centena_inteira) = Numero_inteiro/100-2;
        parseInt(dezena_inteira) = (Numero_inteiro%100)/10-2;

        apresentar = (centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro <= 9999)
    {
        for (resto >= 11 || resto <= 19)
        {
            resto = ((Numero_inteiro%1000)%100);
            parseInt(centena_inteira) = (Numero_inteiro%1000)/100-2;
            parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
            parseInt(mil_inteiro) = Numero_inteiro/1000-2;

            apresentar = (U_ecasadodez[mil_inteiro]+ "e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
        }
        resto = (((Numero_inteiro%1000)%100)%10);
        parseInt(centena_inteira) = (Numero_inteiro%1000)/100-2;
        parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
        parseInt(mil_inteiro) = Numero_inteiro/1000-2;

        apresentar = (U_ecasadodez[mil_inteiro]+ "e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro <= 99999){
        for(resto >= 11 || resto <= 19){
            resto = ((Numero_inteiro%1000)%100);
            parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
            parseInt(mil_inteiro) = (Numero_inteiro/1000)%10;
            parseInt(dmil_inteiro) = (Numero_inteiro/10000-2);
    
            apresentar = (dezenas[dmil_inteiro]+ "e" +U_ecasadodez[mil_inteiro]+ "Mil e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);    
        }
        resto = (((Numero_inteiro%1000)%100)%10);
        parseInt(centena_inteira) = (Numero_inteiro%1000)/100-2;
        parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
        parseInt(mil_inteiro) = (Numero_inteiro/1000)%10;
        parseInt(dmil_inteiro) = (Numero_inteiro/10000-2);

        apresentar = (dezenas[dmil_inteiro]+ "e" +U_ecasadodez[mil_inteiro]+ "Mil e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro >= -99999){
        Numero_inteiro = Numero_inteiro * (-1);
        for(resto >= 11 || resto <= 19){
            resto = ((Numero_inteiro%1000)%100);
            parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
            parseInt(mil_inteiro) = (Numero_inteiro/1000)%10;
            parseInt(dmil_inteiro) = (Numero_inteiro/10000-2);
    
            apresentar = ("menos " +dezenas[dmil_inteiro]+ "e" +U_ecasadodez[mil_inteiro]+ "Mil e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);    
        }
        resto = (((Numero_inteiro%1000)%100)%10);
        parseInt(centena_inteira) = (Numero_inteiro%1000)/100-2;
        parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
        parseInt(mil_inteiro) = (Numero_inteiro/1000)%10-2;
        parseInt(dmil_inteiro) = (Numero_inteiro/10000-2);

        apresentar = ("menos "+dezenas[dmil_inteiro]+ "e" +U_ecasadodez[mil_inteiro]+ "Mil e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro >= -9999){
        Numero_inteiro = Numero_inteiro * (-1);
        for(resto >= 11 || resto <= 19){
            resto = ((Numero_inteiro%1000)%100);
            parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
            parseInt(mil_inteiro) = (Numero_inteiro/1000)%10;
            parseInt(dmil_inteiro) = (Numero_inteiro/10000-2);
    
            apresentar = "menos " +U_ecasadodez[mil_inteiro]+ "Mil e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);    
        }
        resto = (((Numero_inteiro%1000)%100)%10);
        parseInt(centena_inteira) = (Numero_inteiro%1000)/100-2;
        parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;
        parseInt(mil_inteiro) = Numero_inteiro/1000-2;

        apresentar = ("menos " +U_ecasadodez[mil_inteiro]+ "Mil e" +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro >= -999 || Numero_inteiro <= -200){
        Numero_inteiro = Numero_inteiro * (-1);
        for(resto >= 11 || resto <= 19){
            resto = ((Numero_inteiro%1000)%100);
            parseInt(dezena_inteira) = ((Numero_inteiro%1000)%100)/10-2;

            apresentar = "menos " +centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);    
        }
        resto = (Numero_inteiro%100)%10;
        parseInt(centena_inteira) = Numero_inteiro/100-2;
        parseInt(dezena_inteira) = (Numero_inteiro%100)/10-2;

        apresentar = ("menos "+centena[centena_inteira]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro == -100){
        apresentar = ("menos " + casadocem[0]);
    }
    if(Numero_inteiro >= -101 || Numero_inteiro <= -199){
        for(resto >= 11 || resto <= 19){
            resto = ((Numero_inteiro%1000)%100);
    
            apresentar = "menos " +casadocem[1]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);    
        }
        resto = ((Numero_inteiro%100)%10);
        apresentar = ("menos " +casadocem[1]+ "e" + dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro >= -99 || Numero_inteiro <= -20){
        Numero_inteiro = Numero_inteiro * (-1);
        resto = Numero_inteiro%10;
        parseInt(dezena_inteira) = Numero_inteiro/10-2;

        apresentar = ("menos "+ dezenas[dezena_inteira]+ "e" +U_ecasadodez[resto]);
    }
    if(Numero_inteiro >= -19)
{
        Numero_inteiro = Numero_inteiro * (-1);
        apresentar = ("menos " + U_ecasadodez[Numero_inteiro]);
    }
}
function alerta(){
  window.document.getElementById("resultado").innerHTML = apresentar;
}