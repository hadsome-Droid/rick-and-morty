import styled from "styled-components";
import Link from "next/link";
import {Card} from "@/components/Card/Card";
import Image from "next/image";
import aliveStatus from "@/public/statuses/alive.png";
import deadStatus from "@/public/statuses/dead.png";
import unknownStatus from "@/public/statuses/unknown.png";
import {CharacterType} from "@/assets/api/rick-and-morty-api";
import {Status} from "@/components/Card/CharacterCard/Status/Status";


const statusImages = {
    Alive: aliveStatus,
    Dead: deadStatus,
    unknown: unknownStatus,
};

type PropsType = {
    character: CharacterType;
};

export const CharacterCard = (props: PropsType) => {
    const { id, name, image, status } = props.character;

    return (
        <Card name={name}>
            <Status status={status} src={statusImages[status]} />
            <Link href={`/characters/${id}`}>
                <ImageBlock src={image} alt={name} width={300} height={300} priority />
            </Link>
        </Card>
    );
};

const ImageBlock = styled(Image)`
  object-fit: cover;
`;