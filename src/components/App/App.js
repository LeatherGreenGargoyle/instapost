import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from '../Feed'
import CommentsList from '../CommentsList'
import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/comments" component={CommentsList} />
    </Switch>
  </div>
)

export default App
