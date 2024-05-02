import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

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
