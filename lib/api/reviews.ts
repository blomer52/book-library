import { Review } from '@/components/ReviewList'
const BASE_URL = 'https://your-json-server-url.com/reviews'

export async function fetchReviews(bookId: string) {
  const res = await fetch(`${BASE_URL}?bookId=${bookId}`)
  if (!res.ok) throw new Error('Error al obtener reseñas')
  return res.json()
}

export async function postReview(review: {
  bookId: string
  rating: number
  comment: string
}) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...review,
      upVotes: 0,
      downVotes: 0,
      author: 'Anónimo',
    }),
  })
  if (!res.ok) throw new Error('Error al enviar reseña')
  return res.json()
}

export async function voteReview(
  id: number,
  delta: Partial<Pick<Review, 'upVotes' | 'downVotes'>>
) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(delta),
  })
  if (!res.ok) throw new Error('Error al votar reseña')
  return res.json()
}
