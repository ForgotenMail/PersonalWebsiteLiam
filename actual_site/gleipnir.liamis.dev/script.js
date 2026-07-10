import './style.css'
import markdownit from 'markdown-it'
import testplan from './testplan.js'

function main() {

  console.log("Function Main was run")

  const BACKEND = 'http://localhost:5000'

  let numId = 0;

  const toggleCheckbox = new Map();

  const checkedItems = [];

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
      console.log("The Thinger maginger creator was run!")

      const text = li.textContent
      const unchecked = text.match(/^\s*-?\s*\[\s\]\s+/);
      const checked = text.match(/^\s*-\s*\[[xX]\]\s+/);
      if (!unchecked && !checked) return

      const label = text.slice(unchecked ? unchecked[0].length : checked[0].length)
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

      const el = document.createElement("div");

      el.id = `id-${numId}`

      li.appendChild(checkbox)
      li.appendChild(span)
      li.appendChild(el)

      console.log(`Task with id ${el.id} was made`)



      li.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked
        li.classList.toggle('checked', checkbox.checked)
        const id = el.id;
        checkedItems.push(id);
        saveCheckboxState(el.id, checkbox.checked)
      })

      function toggle() {
        console.log("I TWAS TOGGLED!")
        checkbox.checked = !checkbox.checked
        li.classList.toggle('checked', checkbox.checked)
        saveCheckboxState(el.id, checkbox.checked)
      }

      toggleCheckbox.set(el.id, { toggle, checkbox, li });

      numId = numId + 1;

      checkbox.addEventListener('change', () => {
        li.classList.toggle('checked', checkbox.checked)
        saveCheckboxState(el.id, checkbox.checked)
      })
    })
  }

  async function saveCheckboxState(itemId, checked) {
    console.log(`I tried to save ${itemId} that is now ${checked}`)
    try {
      await fetch(`${BACKEND}/api/checkboxes/${itemId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checked }),
      })
    } catch (e) {
      console.error('Failed to save checkbox state:', e)
    }
  }

  async function loadAndApplyStates() {
    try {
      const res = await fetch(`${BACKEND}/api/checkboxes`)
      const data = await res.json()
      const states = data.states || {}
      console.log(states)
      for (const [itemId, checked] of Object.entries(states)) {
        const entry = toggleCheckbox.get(itemId)
        console.log("We entered the function?")
        if (!entry) continue
        if (checked == true) {
          console.log("The loop was entered!")
          entry.toggle();
        }
      }
    } catch (e) {
      console.error('Failed to load checkbox states:', e)
    }
  }

  loadAndApplyStates()
};


main();
