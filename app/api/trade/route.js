import courses from '@/app/api/trade.json'


export async function GET() {
	return new Response(JSON.stringify(courses), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
 }