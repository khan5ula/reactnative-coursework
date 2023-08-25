import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
  form: {
    height: 60,
    width: '90%',
    margin: 8,
    backgroundColor: 'white',
    paddingLeft: 20,
    allowFontScaling: true,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.formBorder,
    fontSize: 20,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.form, showError && styles.errorBorder]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
