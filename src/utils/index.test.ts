import { createQueryString } from './index'

test('returns correct url with query strings', () => {
  expect(createQueryString('Michael Jackson')).toBe("?term=Michael+Jackson")
})
