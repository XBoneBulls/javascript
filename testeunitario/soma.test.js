const {sum} = require('./soma')

describe('math functions', () => {
it ('soma 2 números', () => {
    expect(sum(2,2)).toBe(4)
})
})