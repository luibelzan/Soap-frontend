"use client"
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Equipment() {

  const [isSubmitted, setIsSubmitted] = useState(false);

      const formik = useFormik({
        initialValues: {
          idEquip: '',
          tipEquip: '',
          nomEquip: '',
          idLin: undefined,
          idTrafo: '',
          idCt: '',
          idDist: '',
        },
        validationSchema: Yup.object({
          idEquip: Yup.string().required('El nombre es obligatorio').matches(/^(CIRN|CIRR|SAG0)/, 'This field must match CIRN, CIRR OR SAG0'),
          tipEquip: Yup.string().required('La descripción es obligatoria').matches(/^(SABT|VTN|DC)/, 'This field must match SABT, VTN or DC'),
          nomEquip: Yup.string().required('La descripción es obligatoria'),
          idTrafo: Yup.string().required('La descripción es obligatoria').matches(/^Trf-/, 'This field must match Trf-'), 
          idCt: Yup.string().required('La descripción es obligatoria').matches(/^CT-/, 'This field must match Trf-'), 
          idDist: Yup.string().required('La descripción es obligatoria'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
          try {
            const res = fetch('/api/insertEquip', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            console.log('Succesfully inserted')
            setIsSubmitted(true);
          } catch(error) {
            console.error('Error during insertion')
          }
          setSubmitting(false);
          },
      });
    
      return (
        <main id="main">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="idEquip">Id Equip</label>
                        <input
                        id="idEquip"
                        name="idEquip"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.idEquip}
                        />
                        {formik.touched.idEquip && formik.errors.idEquip ? (
                        <div id='error'>{formik.errors.idEquip}</div>
                        ) : null}
            </div>

            <div>
                        <label htmlFor="tipEquip">tipEquip</label>
                        <select
                          name="tipEquip"
                          value={formik.values.tipEquip}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value="" label="Select a type"></option>
                          <option value="VTN" label="VTN"></option>
                          <option value="SABT" label="SABT"></option>
                          <option value="DC" label="DC"></option>
                        </select>
                        {formik.touched.tipEquip && formik.errors.tipEquip ? (
                        <div id='error'>{formik.errors.tipEquip}</div>
                        ) : null}

                    </div>

                    <div>
                        <label htmlFor="nomEquip">nomEquip</label>
                        <input
                        id="nomEquip"
                        name="nomEquip"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nomEquip}
                        />
                        {formik.touched.nomEquip && formik.errors.nomEquip ? (
                        <div id='error'>{formik.errors.nomEquip}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="idLin">idLin</label>
                        <input
                        id="idLin"
                        name="idLin"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.idLin}
                        />
                        {formik.touched.idLin && formik.errors.idLin ? (
                        <div id='error'>{formik.errors.idLin}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="idTrafo">idTrafo</label>
                        <input
                        id="idTrafo"
                        name="idTrafo"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.idTrafo}
                        />
                        {formik.touched.idTrafo && formik.errors.idTrafo ? (
                        <div id='error'>{formik.errors.idTrafo}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="idCt">idCt</label>
                        <input
                        id="idCt"
                        name="idCt"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.idCt}
                        />
                        {formik.touched.idCt && formik.errors.idCt ? (
                        <div id='error'>{formik.errors.idCt}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="idDist">idDist</label>
                        <input
                        id="idDist"
                        name="idDist"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.idDist}
                        />
                        {formik.touched.idDist && formik.errors.idDist ? (
                        <div id='error'>{formik.errors.idDist}</div>
                        ) : null}
                    </div>


                    {isSubmitted && <p>Equipment Succesfully created</p>}
                    <button type="submit">Submit</button>
          </form>
        </div>
        </main>

      );

}