import { useFormik } from 'formik'
import * as yup from 'yup'
import './LoginForm.scss'

export function LoginForm() {

  function initialValues() {
    return {
      email: "",
      password: ""
    }
  }

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) => {
      console.log("sumit")
      console.log(formValue)
    }
  })

  return (
    <form className='login-form-admin' onSubmit={formik.handleSubmit}>
      <input
        name='email'
        type='email'
        placeholder='Email'
        value={formik.values.email}
        onChange={formik.handleChange}
      />

      <input
        name='password'
        type='password'
        placeholder='Password'
        value={formik.values.password}
        onChange={formik.handleChange}
      />

      <button type='submit'>Login</button>
    </form>
  )
}
