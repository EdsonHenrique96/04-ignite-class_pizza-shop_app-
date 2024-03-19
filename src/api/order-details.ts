import { api } from '@/lib/axios'

interface GetOrdersDetailsParams {
  orderId: string
}

export interface OrderDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrdersDetailsParams) {
  const response = await api.get<OrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
