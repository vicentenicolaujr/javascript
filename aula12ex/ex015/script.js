function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_m_baby.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto_m_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto_m_adulto.png')
            } else {
                img.setAttribute('src', 'foto_m_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto_f_baby.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto_f_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto_f_adulto.png')
            } else {
                img.setAttribute('src', 'foto_f_idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}