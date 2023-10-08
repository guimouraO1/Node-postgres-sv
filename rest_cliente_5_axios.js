import axios from 'axios';

const baseURL = 'http://localhost:3333';

async function getItens(){
  try {
      // GET
      var responseGetAll = await axios.get(`${baseURL}/videos`);
      console.log();
      console.log(responseGetAll.data);

    } catch (error) {
      console.log();
      console.error('Erro:', error.response ? error.response.data : error.message);
}}

async function postItens(newItem){
  try {
    // POST
    const responsePost = await axios.post(`${baseURL}/videos`, newItem);
    console.log();
    console.log('POST Novo Item:', responsePost.data);

    } catch (error) {
      console.log();
      console.error('Erro:', error.response ? error.response.data : error.message);
}}


async function putItens(updatedItem, itemId){
  try {
  const responsePut = await axios.put(`${baseURL}/videos/${itemId}`, updatedItem);
  console.log();
  console.log(`Atualizar postagem ${itemId}:`, responsePut.data);

    } catch (error) {
      console.log();
      console.error('Erro:', error.response ? error.response.data : error.message);
}}

async function deleteItens(itemId){
  try {
      const responseDelete = await axios.delete(`${baseURL}/videos/${itemId}`);
      console.log();
      console.log(`Excluir Item ${itemId}:`, responseDelete.data);

    } catch (error) {
      console.log();
      console.error('Erro:', error.response ? error.response.data : error.message);
}}

// deleteItens("")

const newItem = {

  "title": "Video 10",
  "description": "Esse é um vídeo",
  "duration": 100
  
};
const updatedItem = {

  "title": "Video 30",
  "description": "Esse é um vídeo",
  "duration": 100

};

const itemId = "f38e34b0-378a-45d1-9d1e-a66e4ac88aac"

getItens();
// postItens(newItem)
// putItens(updatedItem, itemId)
// deleteItens(itemId)