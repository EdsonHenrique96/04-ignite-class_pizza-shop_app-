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
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export async function GetOrders({
  pageIndex = 0,
  customerName,
  orderId,
  status,
}: GetOrdersQuery) {
  const mappedStatus = status === 'all' ? null : status

  const response = await api.get<GetOrdersResponse>('/orders', {
    params: { pageIndex, customerName, orderId, status: mappedStatus },
  })

  return response.data
}
