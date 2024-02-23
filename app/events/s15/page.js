"use client"
import { useEffect, useState } from "react";

export default function s15() {


    const [s15, setS15] = useState([]);

    useEffect(() => {
        async function fetchS15() {
            try {
                const res = await fetch('/api/s13');
                const data = await res.json();
                setS13(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchS15();
    }, []);
}