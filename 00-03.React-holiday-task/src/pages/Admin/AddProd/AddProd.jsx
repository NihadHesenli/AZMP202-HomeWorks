import { useFormik } from "formik";
import { ProductSchema } from "../../../validation/product.validation";
import { endpoints } from "../../../services/contest";
import styles from "./index.module.scss";
import { addNewData } from "../../../services/helpers";

const AddProd = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      image: "",
      description: "",
      rating: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await addNewData(endpoints.products, values);   
        if (res) {
          alert("Product added successfully!");
          formik.resetForm();
        } else {
          alert("Failed to add product. Please try again.");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
    validationSchema: ProductSchema,
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className={styles.input}
      />
      {formik.errors.title && formik.touched.title && (
        <p className={styles.error}>{formik.errors.title}</p>
      )}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
        className={styles.input}
      />
      {formik.errors.price && formik.touched.price && (
        <p className={styles.error}>{formik.errors.price}</p>
      )}

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.image}
        className={styles.input}
      />
      {formik.errors.thumbnail && formik.touched.thumbnail && (
        <p className={styles.error}>{formik.errors.thumbnail}</p>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        rows={5}
        className={styles.textarea}
      ></textarea>
      {formik.errors.description && formik.touched.description && (
        <p className={styles.error}>{formik.errors.description}</p>
      )}
      <label htmlFor="rating">Rating</label>
      <input
        id="rating"
        name="rating"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.rating}
        className={styles.input}
      />
      {formik.errors.rating && formik.touched.rating && (
        <p className={styles.error}>{formik.errors.rating}</p>
      )}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default AddProd;