import { useState } from 'react'
import { Text, TextInput, Pressable, View } from 'react-native'
import { render, fireEvent, screen } from '@testing-library/react-native'

const Form = ({ onSubmit }) => {
  const [content, setContent] = useState('')

  const handleSubmit = () => {
    onSubmit({ content })
  }

  return (
    <View>
      <View>
        <TextInput
          value={content}
          onChangeText={(text) => setContent(text)}
          placeholder="Content"
        />
      </View>
      <Pressable onPress={handleSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  )
}

describe('Example', () => {
  it('works', () => {
    expect(1).toBe(1)
  })

  it('a form gets input', () => {
    const onSubmit = jest.fn()
    render(<Form onSubmit={onSubmit} />)

    fireEvent.changeText(
      screen.getByPlaceholderText('Content'),
      'something goes there'
    )

    fireEvent.press(screen.getByText('Submit'))

    expect(onSubmit).toHaveBeenCalledTimes(1)

    expect(onSubmit.mock.calls[0][0]).toEqual({
      content: 'something goes there',
    })

    // The mock onSubmit function should only have been called once
    const calls = onSubmit.mock.calls.length
    expect(calls).toEqual(1)
  })
})
