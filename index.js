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

const customerTemplate = (input) =>
`
<div>
  <table>
    <tr>
      <th>Moe</th>
    </tr>
    ${moePrizes.map(keys => `<tr><td><button id='${keys}' class='moe' data-action='minus'>-</button>${keys} ${input.customers.Moe[keys]}<button id='${keys}' class='moe' data-action='plus'>+</button></td></tr>`).join('')}
  </table>
  <table>
    <tr>
      <th>Larry</th>
    </tr>
    ${larryPrizes.map(keys => `<tr><td><button id='${keys}' class='larry' data-action='minus'>-</button>${keys} ${input.customers.Larry[keys]}<button id='${keys}' class='larry' data-action='plus'>+</button></td></tr>`).join('')}
  </table>
  <table>
    <tr>
      <th>Curly</th>
    </tr>
    ${curlyPrizes.map(keys => `<tr><td><button id='${keys}' class='curly' data-action='minus'>-</button>${keys} ${input.customers.Curly[keys]}<button id='${keys}' class='curly' data-action='plus'>+</button></td></tr>`).join('')}
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

customerList.addEventListener('click', (event) => {
  const action = event.target.getAttribute('data-action');
  if (action === 'minus') {
    if (event.target.id === 'Foo' && event.target.className === 'moe' && data.customers.Moe.Foo > 0) {
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





