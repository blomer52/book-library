import { http, HttpResponse } from 'msw'
import type { Review } from '../types/review'

const mockReviews: Review[] = [
  {
    id: 1,
    bookId: 'mock-book-id',
    text: 'Muy buen libro, lo recomiendo.',
    upVotes: 3,
    downVotes: 0,
    author: 'Anónimo',
    rating: 4,
  },
  {
    id: 2,
    bookId: 'mock-book-id',
    text: 'No me gustó tanto, esperaba más.',
    upVotes: 1,
    downVotes: 2,
    author: 'Anónimo',
    rating: 2,
  },
]

export const handlers = [
  // GET /reviews
  http.get('http://localhost:4000/reviews', ({ request }) => {
    const url = new URL(request.url)
    const bookId = url.searchParams.get('bookId')
    const filtered = mockReviews.filter((r) => r.bookId === bookId)
    return HttpResponse.json(filtered, { status: 200 })
  }),

  // POST /reviews
  http.post('http://localhost:4000/reviews', async ({ request }) => {
    const newReview = (await request.json()) as Omit<
      Review,
      'id' | 'upVotes' | 'downVotes'
    >

    const created: Review = {
      ...newReview,
      id: Date.now(),
      upVotes: 0,
      downVotes: 0,
      author: 'Anónimo',
    }

    mockReviews.push(created)
    return HttpResponse.json(created, { status: 201 })
  }),

  // PATCH /reviews/:id
  http.patch('http://localhost:4000/reviews/:id', async ({ params, request }) => {
    const { id } = params
    const delta = (await request.json()) as Partial<
      Pick<Review, 'upVotes' | 'downVotes'>
    >

    const review = mockReviews.find((r) => r.id === Number(id))

    if (!review) {
      return HttpResponse.json({ error: 'Not found' }, { status: 404 })
    }

    Object.assign(review, delta)
    return HttpResponse.json(review, { status: 200 })
  }),
]
