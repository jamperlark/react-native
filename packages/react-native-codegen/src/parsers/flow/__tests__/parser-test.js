/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow
 * @format
 */

'use strict';

const FlowParser = require('../index.js');
const fixtures = require('../__test_fixtures__/fixtures.js');
jest.mock('fs', () => ({
  readFileSync: filename => fixtures[filename],
}));

describe('RN Codegen Flow Parser', () => {
  Object.keys(fixtures)
    .sort()
    .forEach(fixtureName => {
      it(`can generate fixture ${fixtureName}`, () => {
        expect(FlowParser.parse(fixtureName)).toMatchSnapshot();
      });
    });
});
