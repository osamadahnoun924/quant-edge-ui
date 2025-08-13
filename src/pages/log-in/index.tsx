import { Input, Field, Label } from '@headlessui/react';
import { Form, Formik } from 'formik';
import { Button } from '@headlessui/react';
import { useAuth } from '../../contexts/AuthContext';
import * as Yup from 'yup';
import { Link } from 'react-router';

export const Login = () => {
  const { login, currentUser } = useAuth();

  return (
    <div className="mt-10 flex items-center justify-center">
      <h1>Login page</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await login(values.email, values.password);
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

              {formik.isSubmitting ? (
                <>Submitting...</>
              ) : (
                <Button type="submit">Log in</Button>
              )}
            </Form>
          );
        }}
      </Formik>
      <p>
        Need an account? <Link to="/auth/sign-up">Signup</Link>
      </p>
      <p>
        <Link to="/auth/recover">Forgot password?</Link>
      </p>
    </div>
  );
};
