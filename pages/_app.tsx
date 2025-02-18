import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {HydrationBoundary, QueryClientProvider} from "@tanstack/react-query";
import {useLoader} from "@/assets/hooks/useLoader";
import '../styles/nprogress.css'

export default function App({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient)

    useLoader()

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </HydrationBoundary>
        </QueryClientProvider>
    )

}
