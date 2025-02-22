function calc(){
    const high = document.getElementById("high").value;
    const math = document.getElementById("math").value;
    const eng = document.getElementById("eng").value;
    const ar = document.getElementById("ar").value;

    //tib
    let hightib =  high * (0.75);
    let mathtib =  math * (0.1);
    let engtib =  eng * (0.15);
    let artib =  ar * (0);
    document.getElementById('tib').innerHTML = hightib + mathtib + engtib + artib;

    //9aidala
    let high9aidala =  high * (0.70);
    let math9aidala =  math * (0.15);
    let eng9aidala =  eng * (0.15);
    let ar9aidala =  ar * (0);
    document.getElementById('9aidala').innerHTML = high9aidala + math9aidala + eng9aidala + ar9aidala;

    //handasa
    let highhandasa =  high * (0.65);
    let mathhandasa =  math * (0.2);
    let enghandasa =  eng * (0.15);
    let arhandasa =  ar * (0);
    document.getElementById('handasa').innerHTML = highhandasa + mathhandasa + enghandasa + arhandasa;

    //nerd
    let highnerd =  high * (0.7);
    let mathnerd =  math * (0.15);
    let engnerd =  eng * (0.15);
    let arnerd =  ar * (0);
    document.getElementById('nerd').innerHTML = highnerd + mathnerd + engnerd + arnerd;

    //9ale7
    let high9ale7 =  high * (0.7);
    let math9ale7 =  math * (0.15);
    let eng9ale7 =  eng * (0.15);
    let ar9ale7 =  ar * (0);
    document.getElementById('9ale7').innerHTML = high9ale7 + math9ale7 + eng9ale7 + ar9ale7;

    //9ale72
    let high9ale72 =  high * (0.85);
    let math9ale72 =  math * (0);
    let eng9ale72 =  eng * (0);
    let ar9ale72 =  ar * (0.15);
    document.getElementById('9ale72').innerHTML = high9ale72 + math9ale72 + eng9ale72 + ar9ale72;

    //ye5tefe
    document.getElementById('table').style.display = "block";
}