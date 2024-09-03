import { useEffect, useState } from "react"
import { CiShare1 } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa6"
import { MdPeopleAlt } from "react-icons/md"
import { Container } from "./styles"

const github = "PauloHenriquePP"

export function User() {
    const [data, setData] = useState()

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`https://api.github.com/users/${github}`).then(response => response.json())

            // Verifica se a propriedade 'bio' existe e não é nula antes de chamar 'substr'
            if (response.bio) {
                response.bio = response.bio.substr(0, 100)
            }

            setData(response)
        }

        loadData()
    }, [])

    return (
        <Container>
            {data && (
                <>
                    <img src={data.avatar_url} alt="" />
                    <div id="data">
                        <h1>{data.name}</h1>
                        <p>{data.bio}</p>
                        <div id="socialmedia">
                            <div>
                                <FaGithub />
                                <span>{data.login}</span>
                            </div>
                            {data.company && (
                                <div>
                                    <FaBuilding />
                                    <span>{data.company}</span>
                                </div>
                            )}
                            <div>
                                <MdPeopleAlt />
                                <span>{data.followers} seguidores</span>
                            </div>
                        </div>
                    </div>
                    <div id="github_share">
                        <a href={data.html_url}>
                            <span>GITHUB</span>
                            <CiShare1 />
                        </a>
                    </div>
                </>
            )}
        </Container>
    )
}
