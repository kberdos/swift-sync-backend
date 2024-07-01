import { getAuth0UserBySub, getIdFromSubClaim } from "../api/auth0_utils.js"

export async function handlePostTest(body) {
	const { uid } = body
	return { uid: uid + "test" }
}

export async function handlePostTestUser(body) {
	const { subclaim } = body
	const res = await getAuth0UserBySub(subclaim)
	const resJSON = await res.json()
	console.log(resJSON.identities[0])
}
