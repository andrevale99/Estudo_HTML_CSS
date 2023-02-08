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