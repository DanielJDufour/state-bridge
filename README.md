# state-bridge: _beta_
:bridge_at_night: Build a bridge between your Redux Store and CSS with the State Bridge React Component.  Automatically Convert your Redux Store into DOM Attributes. 

# why?
Changing CSS based on a Redux store value often involved several steps: connecting a component to the Redux store, reading in a prop, setting a class name based on that prop, and writing the styles.  With this new approach, you can avoid connecting some simple components to the Redux store and writing JavaScript to generate class names.  You can directly build a bridge from your Redux store to your styles using CSS styling based on DOM attributes.

# install
```bash
npm install --save state-bridge
```

# usage
Inside your index.js
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import StateBridge from 'state-bridge'

const appElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <StateBridge store={store} element={appElement} keys={['display_menu']}>
      <App />
    </StateBridge>
  </Provider>,
  appElement
);
```

Inside your _menu.scss
```scss
#app[data-state-display_menu=false] #menu {
  display: none;
}

#app[data-state-display_menu=true] #menu {
  display: block;
}
```
