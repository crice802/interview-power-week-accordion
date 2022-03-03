const BASE_URL = "https://api.hatchways.io/assessment/students"

export function indexStudents() {
  return fetch(`${BASE_URL}`, {mode: "cors"})
  .then(res => res.json)
}