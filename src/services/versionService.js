import http from "../services/httpService"

function getAllVersions() {
    return http.get("https://ddragon.leagueoflegends.com/api/versions.json");
}

export async function getCurrentPatch() {
    const {
        data: versions
    } = await getAllVersions();
    if (versions) {
        return versions[0];
    }
    return "no version could be found"
}