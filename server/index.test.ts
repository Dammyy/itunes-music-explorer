import request from 'supertest'
import express from 'express'

const app = express()

describe('Server Sends HTML file on home route', function () {
  test('Server responds to /', async () => {
    const res = await request(app).get('/')
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
  })
})
