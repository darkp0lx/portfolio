console.log('loading')
const data = [
  {
    title: 'Landing Page Pepsi',
    text: 'Landing page bonita e interactiva',
    tec: ['css', 'html', 'javascript'],
    code: 'https://github.com/darkp0lx/pepsiSlider',
    web: 'https://darkp0lx.github.io/pepsiSlider/'
  },
  {
    title: 'Aplicación para ver doramas',
    text:
      'Aplicación web,hecho con React Next,manejo de datos(redux). conectada a una Api externa y backend NodeJs.',
    tec: ['react', 'css', 'html', 'javascript', 'nextjs'],
    code: 'https://github.com/darkp0lx/Disney-plus-clone',
    web: 'https://doramasflix.co/'
  },
  {
    title: 'Clon de Pinterest',
    text:
      'Aplicación echa en react con login y favoritos conectada con una Api(backend:firebase).',
    tecnologias: [],
    code: 'https://github.com/darkp0lx/films2',
    web: 'https://pinterest-8d55f.firebaseapp.com/'
  },
  {
    title: 'Tienda Fashions',
    text:
      'tienda Fashions  con tecnologias frontend(react,redux) y backend(NodeJs,MongoDB).',
    tecnologías: [],
    code: 'https://github.com/darkp0lx/frontend-starComputer',
    web: 'https://fashionsapp.herokuapp.com/'
  }
]
const theme = localStorage.getItem('theme')
const imagesAbout = document.getElementById('social_img')
const links = document.getElementsByClassName('link')
const imageProyect = document.getElementById('img-modal')
const modal = document.getElementById('modal')
/* modal */
const nameModal = document.querySelector('.name')
const textModal = document.querySelector('.description')
const githubModal = document.querySelector('#github')
const webModal = document.querySelector('#web')

console.log(textModal)

if (theme == null) {
  setTheme('light')
} else {
  setTheme(theme)
}
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    imageProyect.src = `./images/proyect${i}.jpg`
    nameModal.textContent = data[i].title
    textModal.textContent = data[i].text
    githubModal.href = data[i].code
    webModal.href = data[i].web
    modal.classList.toggle('active')
    modal.addEventListener('click', () => {
      modal.classList.remove('active')
    })
  })
}

const themeDots = document.getElementsByClassName('theme-dot')
for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode
    console.log('click on theme', mode)
    setTheme(mode)
  })
}
function setTheme (mode) {
  if (mode == 'light') {
    document.getElementById('link-style').href = './dist/style.css'
    imagesAbout.src = './images/coding_normal.svg'
  }
  if (mode == 'blue') {
    document.getElementById('link-style').href = './dist/blue.css'
    imagesAbout.src = './images/coding_ blue.svg'
  }
  if (mode == 'green') {
    document.getElementById('link-style').href = './dist/green.css'
    imagesAbout.src = './images/coding_green.svg'
  }
  if (mode == 'purple') {
    document.getElementById('link-style').href = './dist/purple.css'
    imagesAbout.src = './images/coding_ purple.svg'
  }
  localStorage.setItem('theme', mode)
}
window.addEventListener('DOMContentLoaded', function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById('contact-form')
  var status = document.getElementById('status')

  // Success and Error functions for after the form is submitted

  function success () {
    form.reset()
    status.innerHTML = 'Correo recibido! Gracias'
  }

  function error () {
    status.innerHTML = 'Oops! no pudimos enviar tu correo'
  }

  // handle the form submission event

  form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    status.classList.add('activo')
    var data = new FormData(form)
    ajax(form.method, form.action, data, success, error)
  })
})

// helper function for sending an AJAX request

function ajax (method, url, data, success, error) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}
