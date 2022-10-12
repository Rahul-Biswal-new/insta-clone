import { render, screen } from '@testing-library/react';



import waitUntil from 'async-wait-until';
import { shallow } from 'enzyme';
import nock from 'nock';
import React from 'react';
import Postview from './Postview';
describe('<Postview />', () => {
  beforeAll(() => {
    // Prepare nock to respond to a request
    // to the weather API.
    // In this case our test will always think that london
    // is sunny.
    nock('http://localhost:3004/data')
      .get('')
      .reply(200, {
           data: '',
      });
  });
  it('Component fetching from API', async (done) => {
      const root = shallow(<Postview />);
      let componentsData = {};
    let staticData=[
      {name:"Siva",
      location:"Bengaluru",
      likes:64,
      description: "Kick start your career",
      PostImage: "relative path from local",
      date: new Date(),
      },
      {name:"Neeraj",
      location:"Pune",
      likes:30,
      description: "Sample Description",
      PostImage: "relative path from local",
      date: new Date(),
      },
      {name:"Rahul",
      location:"Hyderabad",
      likes:30,
      description: "Sample Description for Post",
      PostImage: "relative path from local",
      date: new Date(),
      }
      ];
      // We wait until the state has a weather summary, but we
      // don't care yet about the content.
      await waitUntil(() => root.state('data') !== null);
      // It is better to have the expectation here and not inside
      // the waitUntil condition.
     expect(componentsData.data).toEqual(staticData);
     done();
  });
});