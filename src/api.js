const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ac-pt-web-pt-a";

export async function getPlayers(){
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(err);
  }
}