import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';

import { shallow } from 'enzyme';

describe('App', () => {
  describe('componentDidMount', () => {
    it('sets the state componentDidMount', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
          resolve({
            movies: [
              {id: 1, data: {}}, {id: 2, data: {}}
            ]
          })
        })
      }))

      const renderedComponent = await shallow(<App />)
      await renderedComponent.update()
      expect(renderedComponent.state('movies')['movies'].length).toEqual(2)
    })

    it('sets the state componentDidMount on error', async () => {
      window.fetch = jest.fn().mockImplementation(() => ({
        status: 500,
      }))

      const renderedComponent = await shallow(<App />)
      await renderedComponent.update()
      // expect(renderedComponent.state('errorStatus')).toEqual('Error fetching movies')
    })
  })
})
