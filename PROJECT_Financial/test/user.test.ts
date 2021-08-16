import supertest from 'supertest'
import { app } from '../src/app'
import { IUser } from '../src/modules/users/IUser'

test('Must enter a user successfully', () => {
  const email = `${Date.now}@mail.com`
  const newUser: IUser[] = [{ name: 'Isa', email: email, password: 'pw' }]
  return supertest(app).post('/users').send(newUser).then(res => {
    expect(res.statusCode).toBe(201)
    console.log('>>', res)
    // expect(res.body).toEqual(newUser)
  })
})

test('Must list all users', () => {
  return supertest(app).get('/users').then(res => {
    expect(res.statusCode).toBe(201)
    // Deve haver ao menos 1 usuário no banco
    expect(res.body.length).toBeGreaterThan(0)
  })
})
