export async function handlePostTest(body) {
	const { uid } = body
	return { uid: uid + "test" }
}
