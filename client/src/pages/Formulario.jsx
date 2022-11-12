import { Form, Formik } from "formik";
import { createUserRequest } from "../api/crudApi";

export default function Formulario() {
  return (
    <div>
        <Formik
        initialValues={{
          id:"",
          nombre:"",
          password:""
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createUserRequest(values)
            console.log(response)
            actions.resetForm()
          } catch (error) {
            console.error(error);
          }
        }}
        >
            {({handleChange, handleSubmit, values, isSubmitting})=>(
              <Form onSubmit={handleSubmit}>
              <label>identificacion</label>
              <input type="text" name="id" onChange={handleChange} value={values.id} />
              <label>nombre</label>
              <input type="text" name="nombre" onChange={handleChange} value={values.nombre} />
              <label>password</label>
              <input type="text" name="password" onChange={handleChange} value={values.password} />

              <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "guardando":"guardar"}
              </button>
          </Form>
            )}
        </Formik>
    </div>
  )
} 

