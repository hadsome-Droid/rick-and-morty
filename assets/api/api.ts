import {RickAndMortyApi} from "./rick-and-morty-api";
import {NextJsApi} from "./next-js-api";
import {instance, instanceRick} from "@/assets/api/instaces";

const rickAndMortyApi = new RickAndMortyApi(instanceRick);
const nextJsApi = new NextJsApi(instance);

export const API = {
    rickAndMorty: rickAndMortyApi,
    nextJs: nextJsApi,
};