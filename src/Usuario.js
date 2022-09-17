import React from "react"

export default function Usuario() {
    const [name, setName] = React.useState('Catana')
    const [img, setImg] = React.useState('assets/img/catanacomics.svg')


    return (
        <div class="usuario">
            <img src={img} onClick={() => setImg((prompt('Digite a URL da sua imagem:')))}/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {name}
                    <ion-icon name="pencil" onClick={() => setName((prompt('Digite seu nome:')))}></ion-icon>
                </span>
            </div>
        </div>
    )
}