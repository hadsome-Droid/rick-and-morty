import {dehydrate, useQuery} from "@tanstack/react-query";
import {LocationType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {QueryClient} from "@tanstack/query-core";
import {Header} from "@/components/Header/Header";
import {PageWrapper} from "@/components/PageWrapper/PageWrapper";
import {Card} from "@/components/Card/Card";

const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: 'GET',
    }).then(res => res.json())
}

export const getStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.fetchQuery({queryKey: ['locations'], queryFn: getLocations})

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}

const Locations = () => {
    const {data: locations} = useQuery<ResponseType<LocationType>>({queryKey: ['locations'], queryFn: getLocations})

    if (!locations) return null

    const locationsList = locations.results.map(location => (
        <Card name={location.name} key={location.id}/>
    ))

    return (
        <PageWrapper>
            <Header/>
            {locationsList}
        </PageWrapper>
    )
}
export default Locations;