import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display "Pendente" text when order status is pending', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')
    const statusColor = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusColor).toHaveClass('bg-slate-400')
  })

  it('should display "Cancelado" text when order status is canceled', () => {
    const wrapper = render(<OrderStatus status="canceled" />)

    const statusText = wrapper.getByText('Cancelado')
    const statusColor = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusColor).toHaveClass('bg-rose-500')
  })

  it('should display "Em preparo" text when order status is processing', () => {
    const wrapper = render(<OrderStatus status="processing" />)

    const statusText = wrapper.getByText('Em preparo')
    const statusColor = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusColor).toHaveClass('bg-amber-500')
  })

  it('should display "Em entrega" text when order status is delivering', () => {
    const wrapper = render(<OrderStatus status="delivering" />)

    const statusText = wrapper.getByText('Em Entrega')
    const statusColor = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusColor).toHaveClass('bg-amber-500')
  })

  it('should display "Entregue" text when order status is delivered', () => {
    const wrapper = render(<OrderStatus status="delivered" />)

    const statusText = wrapper.getByText('Entregue')
    const statusColor = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(statusColor).toHaveClass('bg-emerald-500')
  })
})
