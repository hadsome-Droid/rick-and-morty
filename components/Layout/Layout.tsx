import {NextPage} from "next";
import {PropsWithChildren} from "react";
import {Header} from "@/components/Header/Header";
import styled from "styled-components";

export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return (
        <Container>
            <Header/>
            <MainBlock>{children}</MainBlock>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
`

const MainBlock = styled.div`
    width: 100%;
    padding-bottom: 10px;
    overflow: hidden;
`