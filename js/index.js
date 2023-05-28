function encriptacion(){
    if(texto=document.querySelector(".inputText").value!=""){
    let texto=document.querySelector(".inputText").value;
    let encriptado="";
    for(let i=0; i<texto.length;i++){
        if(texto[i]=="e"){
            encriptado+="enter";
        }
        else if(texto[i]=="i"){
            encriptado+="imes";
        }
        else if(texto[i]=="a"){
            encriptado+="ai";
        }
        else if(texto[i]=="o"){
            encriptado+="ober";
        }
        else if(texto[i]=="u"){
            encriptado+="ufat";
        }
        else{
            encriptado+=texto[i];
        }
    }
    document.querySelector(".textoResultante").innerHTML=encriptado;
    document.querySelector(".esperando").classList.add("hide");
    document.querySelector(".resultado").classList.remove("hide");
    }
}
function desencriptacion(){
    if(texto=document.querySelector(".inputText").value!=""){
        let texto=document.querySelector(".inputText").value;
        let desencriptado="";
        for(let i=0; i<texto.length;i++){
            if(texto[i]=="e"){
                desencriptado+="e";
                i+=4;
            }
            else if(texto[i]=="i"){
                desencriptado+="i";
                i+=3;
            }
            else if(texto[i]=="a"){
                desencriptado+="a";
                i+=1;
            }
            else if(texto[i]=="o"){
                desencriptado+="o";
                i+=3;
            }
            else if(texto[i]=="u"){
                desencriptado+="u";
                i+=3;
            }
            else{
                desencriptado+=texto[i];
            }
        }
        document.querySelector(".textoResultante").innerHTML=desencriptado;
        document.querySelector(".esperando").classList.add("hide");
        document.querySelector(".resultado").classList.remove("hide");
    }
}
