function calculerMoyenne() {

    var thl1 = parseFloat(document.getElementById("thl1").value);
    var thl2 = parseFloat(document.getElementById("thl2").value);
    var se1 = parseFloat(document.getElementById("se1").value);
    var se2 = parseFloat(document.getElementById("se2").value);
    var se3 = parseFloat(document.getElementById("se3").value);
    var bd1 = parseFloat(document.getElementById("bd1").value);
    var bd2 = parseFloat(document.getElementById("bd2").value);
    var bd3 = parseFloat(document.getElementById("se3").value);
    var res1= parseFloat(document.getElementById("res1").value);
    var res2 = parseFloat(document.getElementById("res2").value);
    var res3 = parseFloat(document.getElementById("res3").value);
    var poo1 = parseFloat(document.getElementById("poo1").value);
    var poo2 = parseFloat(document.getElementById("poo2").value);
    var web1 = parseFloat(document.getElementById("web1").value);
    var web2 = parseFloat(document.getElementById("web2").value);
    var eng = parseFloat(document.getElementById("eng").value);

  
    var moyenne = (((thl1*0.4)+(thl2*0.6))+((se2*0.6)+((se1+se3)/2)*0.4)+((bd2*0.6)+((bd1+bd3)/2)*0.4)+((res2*0.6)+((res1+res3)/2)*0.4)+((poo1*0.4)+(poo2*0.6))+((web1*0.4)+(web2*0.6))+(eng*0.4))/16;
  
    document.getElementById("resultat").innerHTML = "La moyenne est de : " + moyenne.toFixed(2);
  }
  