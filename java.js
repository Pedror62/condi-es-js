
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 6
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
  
    if (hora >= 0 && hora < 12){ 
        //bom dia 
        
        img.src = 'manha.jpg'
        document.boby.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18)  {
        //boa tarde 
        console.log('boa tarde')    
        img.src = 'tarde.jpg'
        document.boby.style.backgroundColor  = '#b9846f'
    } else { 
        // bos noite
        console.log('boa noite')
        img.src = 'noite.jpg'
        document.bony.style.banckgroundColor = '#515154'
    }


}   