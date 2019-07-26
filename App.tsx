import React from 'react';
import HomeScreen from './screens/HomeScreen';
import Example from './components/Example'
import FlexExample from './components/FlexExample'
import ScallingExample from './components/ScallingExample';
import ViewPortExample from './components/ViewPortExample';
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )

export default class App extends React.Component {

    render(){
        return (
            <Provider store={store}>
                <HomeScreen/>
            </Provider>
        )
    }

}



