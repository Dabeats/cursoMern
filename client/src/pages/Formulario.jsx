import { Form, Formik } from "formik";

function Formulario() {
  return (
    <div>
        <Formik
        initialValues={{
          id:"",
          nombre:"",
          password:""
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        >
            {({handleChange, handleSubmit})=>(
              <Form onSubmit={handleSubmit}>
              <label>identificacion</label>
              <input type="text" name="id" onChange={handleChange} />
              <label>nombre</label>
              <input type="text" name="nombre" onChange={handleChange} />
              <label>password</label>
              <input type="text" name="password" onChange={handleChange} />

              <button type="submit">
                  guardar
              </button>
          </Form>
            )}
        </Formik>
    </div>
  )
} 

export default Formulario