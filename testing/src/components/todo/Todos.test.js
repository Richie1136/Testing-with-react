import { render, screen, cleanup } from '@testing-library/react'
import Todo from './Todo'


afterEach(() => {
  cleanup()
})

test('Should render non-completed Todo', () => {
  const todo = { id: 1, title: 'Eat food', completed: false, };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('Eat food')
})

test('Should render completed Todo', () => {
  const todo = { id: 2, title: 'Eat food', completed: true, }
  render(<Todo todo={todo} />)
  const todoElement = screen.getByTestId('todo-2')
  expect(todoElement).toBeInTheDocument()
  expect(todoElement).toHaveTextContent('Eat food')
})