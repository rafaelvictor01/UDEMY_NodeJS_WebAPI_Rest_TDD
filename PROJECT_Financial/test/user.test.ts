import supertest from 'supertest'
import { app } from '../src/app'

test('Must list all users', () => {
  return supertest(app).get('/users').then(res => {
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveLength(1)
    expect(res.body[0]).toHaveProperty('name', 'Isa')
  })
})

test('Must enter a user successfully', () => {
  return supertest(app).post('/users').send({ name: 'Isa' }).then(res => {
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('name', 'Isa')
  })
})
