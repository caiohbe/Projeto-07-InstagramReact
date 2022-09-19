const postsContent = [
    { user: 'meowed', img: 'assets/img/gato-telefone.svg', likesImg: 'assets/img/respondeai.svg', likesTxt: 'respondeai', likesNum: 101.523 },
    { user: 'barked', img: 'assets/img/dog.svg', likesImg: 'assets/img/adorable_animals.svg', likesTxt: 'adorable_animals', likesNum: 99.159 }
]

export default function Posts() {
    const postDivs = postsContent.map((post) => {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" />
                        {post.user}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={post.img} onClick={() => {
                        document.querySelectorAll('.like')[postsContent.indexOf(post)].classList.add('escondido')
                        document.querySelectorAll('.like')[postsContent.indexOf(post)].nextElementSibling.classList.remove('escondido')

                        document.querySelectorAll('.texto')[postsContent.indexOf(post)].innerHTML = `
                            Curtido por <strong>${post.likesTxt}</strong> e <strong>outras ${post.likesNum + 0.001} pessoas</strong>
                        `
                    }} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline" class="like" onClick={() => {
                                document.querySelectorAll('.like')[postsContent.indexOf(post)].classList.add('escondido')
                                document.querySelectorAll('.like')[postsContent.indexOf(post)].nextElementSibling.classList.remove('escondido')

                                document.querySelectorAll('.texto')[postsContent.indexOf(post)].innerHTML = `
                                    Curtido por <strong>${post.likesTxt}</strong> e <strong>outras ${post.likesNum + 0.001} pessoas</strong>
                                 `
                            }}>{post.likesNum}</ion-icon>
                            <ion-icon name="heart" class="escondido" onClick={() => {
                                document.querySelectorAll('.like')[postsContent.indexOf(post)].classList.remove('escondido')
                                document.querySelectorAll('.like')[postsContent.indexOf(post)].nextElementSibling.classList.add('escondido')

                                document.querySelectorAll('.texto')[postsContent.indexOf(post)].innerHTML = `
                                    Curtido por <strong>${post.likesTxt}</strong> e <strong>outras ${post.likesNum} pessoas</strong>
                                `
                            }}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline" class="salvo" onClick={() => {
                                document.querySelectorAll('.salvo')[postsContent.indexOf(post)].classList.add('escondido')
                                document.querySelectorAll('.salvo')[postsContent.indexOf(post)].nextElementSibling.classList.remove('escondido')
                            }}></ion-icon>
                            <ion-icon name="bookmark" class="escondido" onClick={() => {
                                document.querySelectorAll('.salvo')[postsContent.indexOf(post)].classList.remove('escondido')
                                document.querySelectorAll('.salvo')[postsContent.indexOf(post)].nextElementSibling.classList.add('escondido')
                            }}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={post.likesImg} />
                        <div class="texto">
                            Curtido por <strong>{post.likesTxt}</strong> e <strong>outras {post.likesNum} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div class="posts">
            {postDivs}
        </div>
    )
}