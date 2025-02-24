import {API} from "@/assets/api/api";
import {CharacterType} from "@/assets/api/rick-and-morty-api";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import {CharacterCard} from "@/components/Card/CharacterCard/CharacterCard";
import {getLayout} from "@/components/Layout/BaseLayout/BaseLayout";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import styled from "styled-components";


export const getStaticPaths: GetStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters()
    const paths = results.map(character => ({
        params: {id: String(character.id)}
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string);

    if(!character) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            character,
        }
    }
}

type Props = {
    character: CharacterType
}

const Character = (props: Props) => {
    const {character} = props

    const router = useRouter()

    if(router.isFallback) return <h1>Loading...</h1>

    const characterId = router.query.id

    const goToCharacters = () => {
        router.push(`/characters`)
    }

    return (
        <PageWrapper>
            <Container>
                <IdText>ID: {characterId}</IdText>
                <CharacterCard character={character}/>
                <Button onClick={goToCharacters}>Back To Characters</Button>
            </Container>
        </PageWrapper>
    )
}

Character.getLayout = getLayout;
export default Character

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
`

const IdText = styled.div`
    font-size: 40px;
`
const Button = styled.button`
    width: 330px;
    height: 40px;
    border-radius: 4px;
    border: none;
    background: #facaff;
    color: #0a0a0a;
    
    &:hover{
        background-color: #fa52d3;
        color: #fff;
    }
`