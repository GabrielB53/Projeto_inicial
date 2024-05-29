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
function mostrarSenha2() {
  let mstSenha = document.getElementById("senha");
  if (mstSenha.type === "password") {
    mstSenha.type = "text";
  } 
  else {
    mstSenha.type = "password";
  }
  let mstSenha2 = document.getElementById("confirmarSenha");
  if (mstSenha2.type === "password") {
    mstSenha2.type = "text";
  } 
  else {
    mstSenha2.type = "password";
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
        window.alert("Rm incorreto");
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
function verificar2(){
  let user = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let confirmarSenha = document.getElementById("confirmarSenha").value;
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
  while(confirmarSenha == ""){
    window.alert("As senhas tem que ser iguais");
    return false;
}
  while(senha != confirmarSenha){
    window.alert("As senhas tem que ser iguais");
    return false;
}
  return true 
}