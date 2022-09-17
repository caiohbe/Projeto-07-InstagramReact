const sugestions = [
    { user: 'bad.vibes.memes', img: 'assets/img/bad.vibes.memes.svg', desc: 'Segue você' },
    { user: 'chibirdart', img: 'assets/img/chibirdart.svg', desc: 'Segue você' },
    { user: 'razoesparaacreditar', img: 'assets/img/razoesparaacreditar.svg', desc: 'Novo no Instagram' },
    { user: 'adorable_animals', img: 'assets/img/adorable_animals.svg', desc: 'Segue você' },
    { user: 'smallcutecats', img: 'assets/img/smallcutecats.svg', desc: 'Segue você' },
]

const sugestionDiv = sugestions.map((s) => {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={s.img} />
                <div class="texto">
                    <div class="nome">{s.user}</div>
                    <div class="razao">{s.desc}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
})
export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestionDiv}
        </div>
    )
}