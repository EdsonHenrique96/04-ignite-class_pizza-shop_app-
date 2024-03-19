type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

const orderStatusMap: Record<OrderStatus, { text: string; color: string }> = {
  pending: {
    text: 'Pendente',
    color: 'bg-slate-400',
  },
  canceled: {
    text: 'Cancelado',
    color: 'bg-rose-500',
  },
  delivering: {
    text: 'Em Entrega',
    color: 'bg-amber-500',
  },
  delivered: {
    text: 'Entregue',
    color: 'bg-emerald-500',
  },
  processing: {
    text: 'Em preparo',
    color: 'bg-amber-500',
  },
}

interface OrderStatusProps {
  status: OrderStatus
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2 w-2 rounded-full ${orderStatusMap[status].color}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status].text}
      </span>
    </div>
  )
}
