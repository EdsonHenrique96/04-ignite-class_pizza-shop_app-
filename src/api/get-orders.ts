import { api } from '@/lib/axios'

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'cancelled' | 'processing' | 'delivering' | 'devilered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function GetOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: { pageIndex: 0 },
  })

  return response.data
}
