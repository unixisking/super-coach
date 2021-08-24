// import { useEffect } from 'react';

export default async function useInstaPosts() {
  const posts = await fetch(
    'https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables={%22id%22:%226181902742%22,%22first%22:5,%22after%22:null}',
    { mode: 'cors' },
  );
  return posts;
}
