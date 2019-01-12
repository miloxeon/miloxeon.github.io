'use strict'

const processFilters = () => {
  const categories = []

  Array.prototype.slice.call(document.getElementsByClassName('filter')).forEach(filter => {
    const checkbox = filter.children[0]
    const category = checkbox.dataset.category
    const checked = checkbox.checked
    if (checked) {
      categories.push(category)
    }
  })
  document.getElementById('bio').setAttribute('data-categories', categories.join(' '))
}

Array.prototype.slice.call(document.getElementsByClassName('filter')).forEach(filter => {
  filter.children[0].addEventListener('change', processFilters)
})

processFilters()
