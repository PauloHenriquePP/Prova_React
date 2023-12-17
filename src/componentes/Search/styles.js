import { useEffect, useState } from "react"
import { Container } from "./styles"

export function Search() {
    const [data, setData] = useState()

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`https://api.github.com/repos/omniavincit98/av1_desafio_consumo_api/issues`).then(response => response.json())
            response.length == 1 ? setData(`${response.length} publicação`) : setData(`${response.length} publicações`)
        }

        loadData()
    }, [])

    return (
        <Container>
            <h1>Publicações</h1>
            <input type="search" name="issues" id="issues" placeholder="Buscar conteúdo" onChange={e => setData(e.target.value)} />
            <div id="countPost">
                {data}
            </div>
        </Container>
    )
}