import './style.css'
import markdownit from 'markdown-it'
import testplan from './testplan.js'

const md = markdownit()

const html = md.render(testplan)

const wrapper = document.createElement('div');
wrapper.className = 'content'
wrapper.innerHTML = html

makeTaskItemsInteractive(wrapper)

document.querySelector('h1').insertAdjacentElement('afterend', wrapper)

function makeTaskItemsInteractive(container) {
  const lis = container.querySelectorAll('li')
  lis.forEach(li => {
    const text = li.textContent
    const unchecked = text.match(/^\[\s\]\s/)
    const checked = text.match(/^\[x\]\s/i)

    if (!unchecked && !checked) return

    const label = text.slice(4)
    const isChecked = !!checked

    li.innerHTML = ''
    li.className = 'task-item' + (isChecked ? ' checked' : '')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'task-checkbox'
    checkbox.checked = isChecked

    const span = document.createElement('span')
    span.className = 'task-text'
    span.textContent = label

    li.appendChild(checkbox)
    li.appendChild(span)

    li.addEventListener('click', (e) => {
      if (e.target === checkbox) return
      checkbox.checked = !checkbox.checked
      li.classList.toggle('checked', checkbox.checked)
    })

    checkbox.addEventListener('change', () => {
      li.classList.toggle('checked', checkbox.checked)
    })
  })
}
