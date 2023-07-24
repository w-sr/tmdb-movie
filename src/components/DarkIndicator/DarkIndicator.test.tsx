import React from 'react';
import renderer from 'react-test-renderer';
import DarkIndicator from '.';

test('renders correctly', () => {
  const tree = renderer.create(<DarkIndicator loading={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
