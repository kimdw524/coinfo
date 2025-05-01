import { BareFetcher } from 'swr';

const fetcher: BareFetcher = (resource, init) =>
  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${resource}`, init).then((res) => res.json());

export default fetcher;
