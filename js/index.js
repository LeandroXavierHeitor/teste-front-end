let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products



let products = [
    {
        name: "Bateria Eletrônica",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-bateria-eletronica.png",
        curr_price: 149990
      },
      {
        name: "Kit de Pratos",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-pratos.png",
        curr_price: 149990
      },
      {
        name: "Pedal Duplo para Bumbo",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedal-duplo-para-dumbo.png",
        curr_price: 149990
      },
      {
        name: "Módulo para Bateria",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-modulo-para-bateria.png",
        curr_price: 149990
      },
  
      {
        name: "Prato 17” Medium Crash",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-prato-17-medium-crash.png",
        curr_price: 149990
      },
      {
        name: "Kit Bag para Tambores",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-kit-bag-para-tambores.png",
        curr_price: 149990
      },
      {
        name: "Banco para Bateria",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-banco-para-bateria.png",
        curr_price: 149990
      },
      {
        name: "Pedestal para Percussão",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-pedestal-para-percussao.png",
        curr_price: 149990
      },
  
      {
        name: "Mixer de Video",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-mixer-de-video.png",
        curr_price: 149990
      },
      {
        name: "Guitarra Jackson",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-guitarra-jackson.png",
        curr_price: 149990
      },
      {
        name: "Contrabaixo Elétrico",
        "descriptionShort": "Many desktop publishing packages and web page editors now Many",
        image1: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
        image2: "http://econverse.digital/teste-front-end/junior/ninja-som/fotos-produtos/foto-contrabaixo-eletrico.png",
        curr_price: 149990
      },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now button-modal">Ver mais</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        <h2>
                        ${e.name}
                        </h2>
                        <p>
                        ${e.descriptionShort}
                        </P
                    </div>
                    <div class="product-card-price">
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})


function iniciaModal (modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {
      if (e.target.id == modalID || e.target.className == 'fechar'){
          modal.classList.remove('mostrar');
      }
  });
}

const button = document.querySelector('#latest-products');
const button2 = document.querySelector('#best-products');

button.addEventListener('click', function() {
  iniciaModal('modal-produto');
  console.log('clicou');
})

button2.addEventListener('click', function() {
  iniciaModal('modal-produto');
  console.log('clicou');
})