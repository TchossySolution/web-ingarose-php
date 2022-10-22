window.addEventListener('scroll', () => {
  let header = document.getElementById('header')
  let languageSelected = document.getElementById('languageSelected')
  header.classList.toggle( 'sticky', window.scrollY > 70)
  languageSelected.classList.toggle( 'sticky', window.scrollY > 70)
})
