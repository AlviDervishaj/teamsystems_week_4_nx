import { useEffect } from "react";
import { useFetchWithAbort } from "../hooks/useFetchData";

type DogBreedsType = {
  id: string,
  type: string,
  attributes: {
    name: string,
    description: string,
    life: {
      max: number,
      min: number,
    },
    male_weight: {
      max: number,
      min: number,
    },
    female_weight: {
      max: number,
      min: number,
    },
    hypoallergenic: false
  },
  relationships: {
    group: {
      data: {
        id: string,
        type: string
      }
    }
  }
}[]

type DogBreedLinksType = {
  self: string,
  current: string,
  next: string,
  last: string
}

export const Home = () => {
  const { data, isLoading, error } = useFetchWithAbort<{ data: DogBreedsType, links: DogBreedLinksType }>({ url: "https://dogapi.dog/api/v2/breeds", initialData: { data: [], links: { self: "", current: "", next: "", last: "" } } });
  useEffect(() => {
    console.log({ data, isLoading, error });
  }, [data, error, isLoading]);
  return (
    <h2>Home Route</h2>
  );
}
