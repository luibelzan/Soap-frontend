"use client"

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function EquipmentUpdate() {

    const [equip, setEquip] = useState();
    const [cts, setCts] = useState([]);
    const [dists, setDists] = useState([]);
    const [trafos, setTrafos] = useState([]);

    const path = usePathname();
    const query = path.split('/').pop();
    const objetoJSON = { idEquip: query };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('/api/equipment/findEquipById', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(objetoJSON)
                });
                const data = await res.json();
                setEquip(data);
                const res2 = await fetch('/api/ct/getAllCts');
                const res3 = await fetch('/api/distributors/getAllDist');
                const res4 = await fetch('/api/trafos/getAllTrafos');
                setCts(await res2.json());
                setDists(await res3.json());
                setTrafos(await res4.json());
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchData();
    }, []);

    const [isSubmitted, setIsSubmitted] = useState(false);
    //console.log(equip[0].id_equipo);

    const formik = useFormik({
        initialValues: {
          tipEquip: '',
          nomEquip: '',
          idLin: undefined,
          idTrafo: '',
          idCt: '',
          idDist: '',
        },
        validationSchema: Yup.object({
          tipEquip: Yup.string().required('La descripción es obligatoria').matches(/^(SABT|VTN|DC)/, 'This field must match SABT, VTN or DC'),
          nomEquip: Yup.string().required('La descripción es obligatoria'),
          idTrafo: Yup.string().required('La descripción es obligatoria').matches(/^Trf-/, 'This field must match Trf-').test('idTrafo-valid', 'This Id_Trafo doesnt exist', async(value) => {
            return trafos.some(trafo => trafo.id_trafo === value)
          }),  
          idCt: Yup.string().required('La descripción es obligatoria').matches(/^CT-/, 'This field must match Trf-').test('idCt-valid', 'This Id_Ct doesnt exist', async(value) => {
            return cts.some(ct => ct.id_ct === value)
          }), 
          idDist: Yup.string().required('La descripción es obligatoria').test('idDist-valid', 'This Id_Dist doesnt exist', async(value) => {
            return dists.some(dist => dist.id_distribuidora === value)
          }),
        }),
        onSubmit: async (values, { setSubmitting }) => {
          const concatenatedJSON = { ...objetoJSON, ...values };
          try {
            const res = fetch('/api/updateEquip', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(concatenatedJSON)
            });
            console.log('Succesfully updated')
            setIsSubmitted(true);
          } catch(error) {
            console.error('Error during insertion')
          }
          setSubmitting(false);
          },
      });

    return(
        <main id="main">
          {equip && (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div>
                        <label htmlFor="tipEquip">tipEquip</label>
                        <select
                          name="tipEquip"
                          value={formik.values.tipEquip}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          style={{ display: "block" }}
                        >
                          <option value={equip[0].tip_equipo} label={equip[0].tip_equipo}></option>
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
                        placeholder={equip[0].nom_equipo}
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
                        placeholder={equip[0].id_linea}
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
                        placeholder={equip[0].id_trafo}
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
                        placeholder={equip[0].id_ct}
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
                        placeholder={equip[0].id_distribuidora}
                        />
                        {formik.touched.idDist && formik.errors.idDist ? (
                        <div id='error'>{formik.errors.idDist}</div>
                        ) : null}
                    </div>


                    {isSubmitted && <p>Equipment Succesfully updated</p>}
                    <button type="submit">Submit</button>
          </form>
        </div>
        )}
        </main>
    )

}