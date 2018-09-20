import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

jest.mock('./apiCalls')

describe('App', () => {
  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      const renderedComponent = await shallow(<App />)
      await renderedComponent.update()
      expect(renderedComponent.state('movies')['movies'].length).toEqual(2)
    })

    it('sets the state componentDidMount on error', async () => {
      const renderedComponent = await shallow(<App />)
      await renderedComponent.update()
      expect(renderedComponent.state('errorStatus')).toEqual('Error fetching movies')
    })
  })
})
