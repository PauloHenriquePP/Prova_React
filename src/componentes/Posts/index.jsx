import { useEffect, useState } from 'react'
import { Post } from '../Post'
import { Container } from "./styles"

export function Posts() {
    const [data, setData] = useState()

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`https://api.github.com/repos/Jelido/Prova_React/issues
            `).then(response => response.json())
            response.forEach(element => {
                element.body = element.body.substr(0, 300) + '...'
                const date = new Date(element.created_at)
                const hoje = new Date()
                const ano = hoje.getFullYear() - date.getFullYear()
                const mes = hoje.getMonth() - date.getMonth()
                const dia = hoje.getDate() - date.getDate()
                if (ano > 1) {
                    element.created_at = `Há ${ano} anos`
                } else if (ano == 1) {
                    element.created_at = `Há ${ano} ano`
                } else if (mes > 1) {
                    element.created_at = `Há ${mes} meses`
                } else if (mes == 1) {
                    element.created_at = `Há ${mes} mês`
                } else if (dia > 1) {
                    element.created_at = `Há ${dia} dias`
                } else if (dia == 1) {
                    element.created_at = `Há ${dia} dia`
                } else {
                    element.created_at = `Hoje`
                }
            })
            setData(response)
        }

        loadData()
    }, [])

    return (
        <Container>
            {data && data.map(issue => (
                <Post key={issue.id} body={issue.body} title={issue.title} date={issue.created_at} />
            ))}
        </Container>
    )
}