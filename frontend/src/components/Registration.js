import React from 'react'
import Form from react-bootstrap
//https://react-bootstrap.github.io/components/forms/ **used the example with Formik**

const { Formik } = formik;

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

function RegistrationForm() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        username: 'Rachel',
        password: 'helloworld',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>User Name </Form.Label>
              <Form.Control
                type="text"
                username="username"
                value={values.username}
                onChange={handleChange}
                isValid={touched.username && !errors.username}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

render(<RegistrationForm />);