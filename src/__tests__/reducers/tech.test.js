import reducer, { INITIAL_STATE } from '../../redux/reducers/tech'
import * as TechActions from '../../redux/actions/tech'

describe('Tech reducer', () => {
  it('ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, TechActions.addTech('React'))

    expect(state).toStrictEqual(['React'])
  })
})
