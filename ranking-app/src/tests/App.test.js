import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';

import { shallow } from 'enzyme';

window.fetch = jest.fn()
                 .mockImplementationOnce(() => ({
                   status: 200,
                   json: () => new Promise((resolve, reject) => {
                     resolve({
                       movies: [
                         {id: 1, data: {}}, {id: 2, data: {}}
                       ]
                     })
                   })
                 }))
                 .mockImplementationOnce(() => ({
                   status: 500,
                 }))

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
      console.log(renderedComponent.state('errorStatus'));
      expect(renderedComponent.state('errorStatus')).toEqual('Error fetching movies')
    })
  })
})
