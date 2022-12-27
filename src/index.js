import React from 'react' //импортируем React
import reactDom from 'react-dom' //импортируем ReactDom
import 'bootstrap/dist/css/bootstrap.css' //импортируем стили CSS

import Counter from './components/counter'

const App = () => {
  return <Counter />
}
reactDom.render(<App />, document.getElementById('root'))
