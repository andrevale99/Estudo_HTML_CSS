var cnt = 0;

function hello()
{
    document.getElementById("hello_p").innerHTML = "Você apertou " + ++cnt + " vezes!";
}

function reset_cnt()
{
    cnt = 0;
    document.getElementById("hello_p").innerHTML = "Contagem Reiniciada!";
}

//==================================================

function calcular_media(p1, p2, p3, result)
{
    n1 = Number(document.getElementById(p1).value);
    n2 = Number(document.getElementById(p2).value);
    n3 = Number(document.getElementById(p3).value);

    media = (n1 + n2 + n3) / 3;

    if(media >= 7)
    {
        document.getElementById(result).classList.add("aprovado");

        document.getElementById(result).classList.remove("reprovado");
        document.getElementById(result).classList.remove("aprovado_por_nota");

        document.getElementById(result).innerHTML = "Aprovado";
    }
    else if (media < 7 && media >= 5)
    {
        document.getElementById(result).classList.add("aprovado_por_nota");

        document.getElementById(result).classList.remove("aprovado");
        document.getElementById(result).classList.remove("reprovado");
        
        document.getElementById(result).innerHTML = "Aprovado por Nota";
    }
    else
    {
        document.getElementById(result).classList.add("reprovado");

        document.getElementById(result).classList.remove("aprovado");
        document.getElementById(result).classList.remove("aprovado_por_nota");

        document.getElementById(result).innerHTML = "Reprovado";
    }
}