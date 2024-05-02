import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// const QUERY = encodeURIComponent('*[_type == "page"]');

//   const URL = `https://${
//     import.meta.env.VITE_SANITY_PROJECT_ID
//   }.api.sanity.io/v2021-10-21/data/query/${
//     import.meta.env.VITE_SANITY_DATASET
//   }?query=${QUERY}`;

//   console.log('PROJECT ID', import.meta.env.VITE_SANITY_PROJECT_ID);

// useEffect(() => {
//   fetch(URL)
//     .then((res) => res.json())
//     .then(({ result }) => {
//       console.log(JSON.stringify(result));
//     })
//     .catch((err) => console.error(err));
// }, []);

const sanityProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const sanityDataset = import.meta.env.VITE_SANITY_DATASET;

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  //useCdn: true, //set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

export async function getWebDevCards() {
  const webDevCards = await sanityClient.fetch('*[_type == "webDevCards"]');
  return webDevCards;
}

export function getImageUrl(imageRef: string) {
  const builder = imageUrlBuilder(sanityClient);

  const builtImageUrl = builder.image(imageRef).toString();

  return builtImageUrl;
}
