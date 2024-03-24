import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'
const onPageChangeSpy = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeSpy.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeSpy}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: /Próxima página/i,
    })

    await user.click(nextPageButton)

    expect(onPageChangeSpy).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={4}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeSpy}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: /Página anterior/i,
    })

    await user.click(nextPageButton)

    expect(onPageChangeSpy).toHaveBeenCalledWith(3)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={7}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeSpy}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: /Primeira página/i,
    })

    await user.click(nextPageButton)

    expect(onPageChangeSpy).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeSpy}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: /Última página/i,
    })

    await user.click(nextPageButton)

    expect(onPageChangeSpy).toHaveBeenCalledWith(19)
  })
})
