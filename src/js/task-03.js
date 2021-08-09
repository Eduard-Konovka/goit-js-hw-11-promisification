const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const gallery = document.querySelector('#gallery')

gallery.style.display = 'flex'
gallery.style.padding = '0px'

gallery.insertAdjacentHTML(
  'afterbegin',
  `<li style="display:flex; width:0,33vw; height:0,33vh; margin: 10px;">
    <img src='${images[0].url}' alt='${images[0].alt}' style='display: block; height: 100%; width: 100%; object-fit:cover'>
  </li>
  <li style="display:flex; width:0,33vw; height:0,33vh; margin: 10px;">
    <img src='${images[1].url}' alt='${images[1].alt}' style='display: block; height: 100%; width: 100%; object-fit:cover'>
  </li>
  <li style="display:flex; width:0,33vw; height:0,33vh; margin: 10px;">
    <img src='${images[2].url}' alt='${images[2].alt}' style='display: block; height: 100%; width: 100%; object-fit:cover'>
  </li>`,
)

// ------- Альтернативный вариант -------

// images.forEach(img =>
//   gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li style="display:flex; width:0,33vw; height:0,33vh; margin: 10px;">
//       <img src='${img.url}' alt='${img.alt}' style='display: block; height: 100%; width: 100%; object-fit:cover'>
//     </li>`,
//   ),
// )
