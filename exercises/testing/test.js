// write some tests

const api = require('./api')
const users = require('./users')


describe('users', () => {
    describe('findUser', () => {
        test('users find', async  () => {
            console.log('testy:')
            console.log(users)
             const us = await users.findUser(4)
             expect(us.id).toBe(4)
        })
    })

})
