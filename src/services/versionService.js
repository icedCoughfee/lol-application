import http from "../services/httpService"

function getAllVersions() {
    return http.get("https://ddragon.leagueoflegends.com/api/versions.json");
}

export async function getCurrentPatch() {
    const {
        data: versions
    } = await getAllVersions();
    console.log("inside getCurrentPatch", versions)
    if (versions) {
        return versions[0];
    }
    return "no version could be found"
}