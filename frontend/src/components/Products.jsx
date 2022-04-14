import { useState, useEffect } from "react"

export const Products = () => {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2222/hotel")
            .then(d => d.json())
            .then((res) => {
                // console.log(res)
                setProd(res)
            })
    }, [])
    console.log(prod)

    return (
        // <p>hello world</p>
        <>
            {
                prod.map((e, i) =>
                    <div index={i}>
                        <img src={e.immageUrl} alt="im" />
                        <p>{e.name}</p>
                        <p>{e.menu}</p>
                        <p>{"Rs." + e.costforone}</p>
                        <hr />
                    </div>
                )
            }
        </>
    )
}