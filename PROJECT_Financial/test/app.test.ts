import request from 'supertest'
import { app } from '../src/app'

test('Application must be started', () => {
  return request(app).get('/').then(res => {
    expect(res.statusCode).toBe(201)
  })
})
