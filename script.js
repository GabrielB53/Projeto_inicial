function ClickMenu(){
    if (itens.style.display == 'block'){
      itens.style.display = 'none'
    } 
    else{
      itens.style.display = 'block'
    }
  }
  
function mostrarSenha() {
    let mstSenha = document.getElementById("senha");
    if (mstSenha.type === "password") {
      mstSenha.type = "text";
    } 
    else {
      mstSenha.type = "password";
    }
}
function verificar(){
    let user = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    while(user == ""){
        window.alert("Digite seu RM");
        return false;
    } 
    while(user.indexOf("@")==-1){
        window.alert("Email incorreto");
        document.getElementById("usuario").focus();
        document.getElementById("usuario").value="";
        return false;
    }
    while(senha == ""){
        window.alert("DIGITA A SENHA");
        return false;
    }
    return true 

}