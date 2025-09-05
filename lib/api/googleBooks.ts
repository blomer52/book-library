const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes'

export async function searchBooks(query: string) {
  const res = await fetch(`${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error('Error al buscar libros')
  const data = await res.json()
  return data.items || []
}

export async function getBookById(id: string) {
  const res = await fetch(`${GOOGLE_BOOKS_API}/${id}`)
  if (!res.ok) throw new Error('Error al obtener detalles del libro')
  const data = await res.json()
  return data
}
