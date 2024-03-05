"use client"
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Equipment() {
    const [datos, setDatos] = useState({
        idEquip: '',
        tipEquip: '',
        nomEquip: '',
        idLin: undefined,
        idTrafo: '',
        idCt: '',
        idDist: '',
        // Añade más campos según sea necesario
      });
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/equipment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(e)
        });
        console.log(datos);
      };

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
          idEquip: Yup.string().required('El nombre es obligatorio'),
          tipEquip: Yup.string().required('La descripción es obligatoria'),
          nomEquip: Yup.string().required('La descripción es obligatoria'),
          idTrafo: Yup.string().required('La descripción es obligatoria'), 
          idCt: Yup.string().required('La descripción es obligatoria'),
          idDist: Yup.string().required('La descripción es obligatoria'),
        }),
        onSubmit: values => {
          const res = fetch('/api/equipment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });

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
                        <input
                        id="tipEquip"
                        name="tipEquip"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tipEquip}
                        />
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
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.idDist}
                        />
                        {formik.touched.idDist && formik.errors.idDist ? (
                        <div id='error'>{formik.errors.idDist}</div>
                        ) : null}
                    </div>
                    <button type="submit">Submit</button>
          </form>
        </div>
        </main>

      );

}