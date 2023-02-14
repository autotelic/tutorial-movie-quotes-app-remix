import { json } from "@remix-run/node";
import { quotesApi, gql } from '../lib/quotes-api.server';
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const { data } = await quotesApi.query(gql`
    query {
      quotes {
        id
        quote
        saidBy
        createdAt
        movie {
          id
          name
        }
      }
    }
  `);
  const quotes = data?.quotes || []
  return json({ quotes });
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Movie Quotes</h1>
      <div>
        {data.quotes.length > 0 ? data.quotes.map((quote) => (
          <div>
            <blockquote>
              <p>{quote.quote}</p>
            </blockquote>
            <p>
              — {quote.saidBy}, {quote.movie?.name}
            </p>
            <div>
              <span>Added {new Date(quote.createdAt).toUTCString()}</span>
            </div>
          </div>
        )) : (
          <p>No movie quotes have been added.</p>
        )}
      </div>
    </div>
  );
}
