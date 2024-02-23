"use client"
import { useEffect, useState } from "react";

export default function s63() {

    const [s63, setS63] = useState([]);

    useEffect(() => {
        async function fetchS63() {
            try {
                const res = await fetch('/api/s63');
                const data = await res.json();
                setS63(data);
            } catch(error) {
                console.error('Error: ', error);
            }
        }
        fetchS63();
    }, []);


    return (
        <main id="main">
        <div>
            <h1>S63 events</h1>
            <u1>
            {s63.map(event => (
                <li key={event.id}>Id: {event.idPet}, Version: {event.version}, Rtu: {event.rtuId}, LVSLine: {event.lvsId}, LVS Pos: {event.lvsPos}, ErrCat: {event.errCat}, ErrCode: {event.errCode}, Fh: {event.fh}, Et: {event.et}, C: {event.c}, D1: {event.d1}, D2: {event.d2}</li>
            ))}
            </u1>
        </div>
        </main>
  );
}