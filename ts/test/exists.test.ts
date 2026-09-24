
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AttackOnTitanSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AttackOnTitanSDK.test()
    equal(testsdk instanceof AttackOnTitanSDK, true,
      'AttackOnTitanSDK.test() must return a client synchronously')
  })

})
