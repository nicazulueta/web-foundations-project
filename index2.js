const data = {
  customers: {
    Moe: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Larry: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    },
    Curly: {
      Foo: 0,
      Bar: 0,
      Bazz: 0
    }
  },
  prizes: {
    Foo: 1,
    Bar: 3,
    Bazz: 5
  }
};

const prizeTemplate = (input) => `
  <div>
    <table>
    ${Object.keys(input.prizes).map(key => `<th>${key}<tr><td>${input.prizes[key]}</td></tr></th>`).join('')}
    </table>
  </div>
`
let moePrizes = Object.keys(data.customers.Moe)
let larryPrizes = Object.keys(data.customers.Larry)
let curlyPrizes = Object.keys(data.customers.Curly)

const customerTemplate = (input) => `
<div>
  <table>
  ${Object.keys(input.customers).map(name => `<th>${name}<tr><td>${Object.keys(input.customers[name]).map(prizes => `
    <tr><td><button id='${name}' class='${prizes} data-action='minus'>-</button> ${prizes} ${input.customers[name][prizes]} <button id='${name}' data-action='minus'>+</button></td><tr>`).join('')}</td></tr></th>`).join('')}
  </table>
</div>
`

const prizeList = document.querySelector('#prizes')
const customerList = document.querySelector('#customers')

const render = () => {
  prizeList.innerHTML = prizeTemplate(data)
  customerList.innerHTML = customerTemplate(data)
}

render();

/*still working on the below*/

customerList.addEventListener('click', (event) => {
  const parent = event.target.parentNode
  const action = event.target.getAttribute('data-action');
  const person = event.target.id
  const prize1 = event.target.className

  if (action === 'minus') {
    if (event.target.id === person && event.target.className === 'moe' && data.customers.Moe.Foo > 0) {
    data.customers.Moe.Foo = data.customers.Moe.Foo - 1;
    data.prizes.Foo = data.prizes.Foo + 1
    }
    if (event.target.id === 'Bar' && event.target.className === 'moe' && data.customers.Moe.Bar > 0) {
      data.customers.Moe.Bar = data.customers.Moe.Bar - 1
      data.prizes.Bar = data.prizes.Bar + 1
      }
    if (event.target.id === 'Bazz' && event.target.className === 'moe' && data.customers.Moe.Bazz > 0) {
    data.customers.Moe.Bazz = data.customers.Moe.Bazz - 1
    data.prizes.Bazz = data.prizes.Bazz + 1
    }
    if (event.target.id === 'Foo' && event.target.className === 'larry' && data.customers.Larry.Foo > 0) {
    data.customers.Larry.Foo = data.customers.Larry.Foo - 1
    data.prizes.Foo = data.prizes.Foo + 1
    }
    if (event.target.id === 'Bar' && event.target.className === 'larry' && data.customers.Larry.Bar > 0) {
      data.customers.Larry.Bar = data.customers.Larry.Bar - 1
      data.prizes.Bar = data.prizes.Bar + 1
      }
    if (event.target.id === 'Bazz' && event.target.className === 'larry' && data.customers.Larry.Bazz > 0) {
    data.customers.Larry.Bazz = data.customers.Larry.Bazz - 1
    data.prizes.Bazz = data.prizes.Bazz + 1
    }
    if (event.target.id === 'Foo' && event.target.className === 'curly' && data.customers.Curly.Foo > 0) {
    data.customers.Curly.Foo = data.customers.Curly.Foo - 1
    data.prizes.Foo = data.prizes.Foo + 1
    }
    if (event.target.id === 'Bar' && event.target.className === 'curly' && data.customers.Curly.Bar > 0) {
      data.customers.Curly.Bar = data.customers.Curly.Bar - 1
      data.prizes.Bar = data.prizes.Bar + 1
      }
    if (event.target.id === 'Bazz' && event.target.className === 'curly' && data.customers.Curly.Bazz > 0) {
    data.customers.Curly.Bazz = data.customers.Curly.Bazz - 1
    data.prizes.Bazz = data.prizes.Bazz + 1
    }
  }
  if (action === 'plus') {
    if (event.target.id === 'Foo' && event.target.className === 'moe' && data.prizes.Foo > 0) {
      data.customers.Moe.Foo = data.customers.Moe.Foo + 1
      data.prizes.Foo = data.prizes.Foo - 1
      }
    if (event.target.id === 'Bar' && event.target.className === 'moe' && data.prizes.Bar > 0) {
      data.customers.Moe.Bar = data.customers.Moe.Bar + 1
      data.prizes.Bar = data.prizes.Bar - 1
      }
    if (event.target.id === 'Bazz' && event.target.className === 'moe' && data.prizes.Bazz > 0) {
    data.customers.Moe.Bazz = data.customers.Moe.Bazz + 1
    data.prizes.Bazz = data.prizes.Bazz - 1
    }
    if (event.target.id === 'Foo' && event.target.className === 'larry' && data.prizes.Foo > 0) {
    data.customers.Larry.Foo = data.customers.Larry.Foo + 1
    data.prizes.Foo = data.prizes.Foo - 1
    }
    if (event.target.id === 'Bar' && event.target.className === 'larry' && data.prizes.Bar > 0) {
      data.customers.Larry.Bar = data.customers.Larry.Bar + 1
      data.prizes.Bar = data.prizes.Bar - 1
      }
    if (event.target.id === 'Bazz' && event.target.className === 'larry' && data.prizes.Bazz > 0) {
    data.customers.Larry.Bazz = data.customers.Larry.Bazz + 1
    data.prizes.Bazz = data.prizes.Bazz - 1
    }
    if (event.target.id === 'Foo' && event.target.className === 'curly' && data.prizes.Foo > 0) {
    data.customers.Curly.Foo = data.customers.Curly.Foo + 1
    data.prizes.Foo = data.prizes.Foo - 1
    }
    if (event.target.id === 'Bar' && event.target.className === 'curly' && data.prizes.Bar > 0) {
      data.customers.Curly.Bar = data.customers.Curly.Bar + 1
      data.prizes.Bar = data.prizes.Bar - 1
      }
    if (event.target.id === 'Bazz' && event.target.className === 'curly' && data.prizes.Bazz > 0) {
    data.customers.Curly.Bazz = data.customers.Curly.Bazz + 1
    data.prizes.Bazz = data.prizes.Bazz - 1
    }
  }
  render()
})





