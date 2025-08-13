import { Input, Field, Label, Button } from '@headlessui/react';
import { Form, Formik } from 'formik';
import { useAuth } from '../../contexts/AuthContext';
import * as Yup from 'yup';
import { Link } from 'react-router';

export const SignUp = () => {
  const { signup, currentUser } = useAuth();

  return (
    <div className="mt-10 flex items-center justify-center">
      <h1>Sign up page</h1>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirmation: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Please confirm your password'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await signup(values.email, values.password);
          } catch (error) {
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => {
          console.log(currentUser?.email);
          return (
            <Form>
              <Field>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
              </Field>

              <Field>
                <Label>Password</Label>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password &&
                  formik.touched.password &&
                  formik.errors.password}
              </Field>
              <Field>
                <Label>Password Confirmation</Label>
                <Input
                  name="passwordConfirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirmation}
                />
                {formik.errors.passwordConfirmation &&
                  formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation}
              </Field>
              {formik.isSubmitting ? (
                <>Submitting...</>
              ) : (
                <Button type="submit">Sign up</Button>
              )}
            </Form>
          );
        }}
      </Formik>
      <p>
        Already have an account? <Link to={'/auth/log-in'}>Login</Link>
      </p>
    </div>
  );
};
