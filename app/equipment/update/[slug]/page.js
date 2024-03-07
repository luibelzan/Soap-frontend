"use client"

import { useRouter, usePathname } from 'next/navigation';
import { getEquipoById } from '../../../equipment'

export default function EquipmentUpdate() {

    const path = usePathname();
    const query = path.split('/').pop();
    console.log(query)
    return(
        <main id="main">
            <div>
                <h1>Update Equpment</h1>
                <p></p>
                </div>
        </main>
    )

}