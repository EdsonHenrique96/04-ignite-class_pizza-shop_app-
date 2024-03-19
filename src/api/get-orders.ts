import { api } from '@/lib/axios'

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

interface GetOrdersQuery {
  pageIndex?: number
}

export async function GetOrders({ pageIndex = 0 }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: { pageIndex },
  })

  return response.data
}
