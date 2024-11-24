// // pages/api/destinations.js
// // import articles from './blogs.json';
import articles from '@/app/api/articles.json'

// export default function handler(req, res) {
//   res.status(200).json(articles);
// }






// import articles from '@/app/api/blogs.json';

export async function GET() {
  return new Response(JSON.stringify(articles), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
