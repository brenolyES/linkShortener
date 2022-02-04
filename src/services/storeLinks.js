
// Buscar Links Salvos
const getLinkSave = async (key) => {
  const myLinks = await localStorage.getItem(key);
  let linksSaves = JSON.parse(myLinks)  || [];
  return linksSaves;
}

// Salvar um link no storege.
const saveLink = async (key,  newLink) => {
  let linksStored = await getLinkSave(key);

  const hasLink = linksStored.some( link => link.id === newLink.id);

  if(hasLink){
    console.log('link  ja existe na lista')
    return;
  }

  linksStored.push(newLink);
  await localStorage.setItem(key,  JSON.stringify(linksStored));
  console.log('link salvo com sucesso');
}

// Deletar algum link salvo.
const deleteLink= (links, id) => {
  let myLinks = links.filter(item => {
    return (item.id !== id)
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
  console.log('link deletado');
  return myLinks;
}

export {getLinkSave, saveLink, deleteLink}