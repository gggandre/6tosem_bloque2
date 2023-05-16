import { useEffect, useState } from "react";

console.log("Intentando realizar algo 1 vez")

const Timer = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
                setCount( (count) => count + 1);
        }, 1000);

        return () => console.log("Termina en componente (Liberar recurso)")
    });

    return <h1>Eventos: {count}</h1>
}

export default Timer;