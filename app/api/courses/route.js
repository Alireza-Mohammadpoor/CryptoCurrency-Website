import courses from '@/app/api/courses.json'


export async function GET() {
	return new Response(JSON.stringify(courses), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
 }