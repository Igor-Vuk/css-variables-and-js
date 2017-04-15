/* dataset is an object that will contain all data- attributes from that specific element */

/* since some lements dont have sizing we will say || ''. In case we don't it will appent undefined at hte end' */

/* Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents). The difference between this property and the document.body property, is that the document.body element returns the <body> element */

/* First image - set each property specifically */
const inputs = document.querySelectorAll('.controls:first-of-type input')

function handleUpdate1 () {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(input => input.addEventListener('change', handleUpdate1))

/* Second image - set two properties at once */
const input = document.querySelector('#space-blur')

function handleUpdate2 () {
  const suffix = this.dataset.sizing
  document.querySelector('#photo2').style.setProperty(`--${this.dataset.blur}`, this.value + suffix)
  // spacing value is double the size of blur
  document.querySelector('#photo2').style.setProperty(`--${this.dataset.spacing}`, ((this.value) * 2) + suffix)
}

input.addEventListener('change', handleUpdate2)
