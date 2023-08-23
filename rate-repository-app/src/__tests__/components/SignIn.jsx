import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native'
import { Formik } from 'formik'
import { SignInForm } from '../../components/SignIn'

describe('Sign in', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()

      const initialValues = {
        username: '',
        password: '',
      }

      render(
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      )

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'matti')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'salainen')
      fireEvent.press(screen.getByText('Sign in'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'matti',
          password: 'salainen',
        })
      })
    })
  })
})
