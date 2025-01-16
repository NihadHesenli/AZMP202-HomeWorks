import { prodSchema } from "../../../validation/validation"
import { addNewData } from "../../../services/helpers"
import {Formik,Form,Field} from 'formik'
import { endpoints } from "../../../services/base"

const AddProducts = () => {

  return (
    <>
<Formik
initialValues={{
    title : '',
    description : '',
    price : '',
    image_Url : '',
}} validationSchema={prodSchema} 
onSubmit={async (values , {resetForm})=>{
    const res = await addNewData(endpoints.products , values)
    console.log(res);
    if (res && res.status === 201) {
        resetForm();
      }
}}>

   {({errors,touched})=>(
     <Form>
     <div>
     <Field name='image_Url'/>
     {errors.image_Url && touched.image_Url ? 
     <div>{errors.image_Url}</div> : null}
     </div>
     <div>
     <Field name='title'/>
     {errors.title && touched.title ? 
     <div>{errors.title}</div> : null}
     </div>
     <div>
     <Field name='description'/>
     {errors.description && touched.description ? 
     <div>{errors.description}</div> : null}
     </div>
     <div>
     <Field name='price'/>
     {errors.price && touched.price ? 
     <div>{errors.price}</div> : null}
     </div>
     <button type="submit">Submit</button>
 </Form>
   )}
</Formik>
    </>
  )
}

export default AddProducts