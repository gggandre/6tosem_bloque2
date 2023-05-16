import { useState,Fragment, useEffect } from "react";


const Marcadores = () => {
    const [contadorA, setContadorA] = useState(0);
    const [contadorB, setContadorB] = useState(0);

    useEffect(() => { 
        console.log("Effect sin dependencias")
    });


    useEffect(() => { 
        console.log("Effect []")
    }, []);


    useEffect(() => { 
        console.log("Effect [contadorA,contadorB]")
    }, [contadorA,contadorB]);

    return (
        <Fragment>
            <h1>{contadorA}</h1>
            <button onClick={() => setContadorA(contadorA + 1)}>Contar A</button>
            <h1>{contadorB}</h1>
            <button onClick={() => setContadorB(contadorB + 1)}>Contar B</button>
        </Fragment>
    );
};

export default Marcadores;