function ContactService() {

  var lastId = 3;

  var contacts = [{
    id: 1,
    name: "Diogo Cunha",
    picture: "https://pbs.twimg.com/profile_images/461607905330864128/xfU1_t8e_400x400.jpeg",
    twitter: "diffcunha",
    email: "contact@diogocunha.me",
    phone: "+351 919 417 538"
  }, {
    id: 2,
    name: "Luís Faustino",
    picture: "https://pbs.twimg.com/profile_images/381816018/Luis_20090722_0542-2_400x400.jpg",
    twitter: "luisfaustino",
    email: "contact@diogocunha.me",
    phone: "+351 919 417 538"
  }, {
    id: 3,
    name: "João Jerónimo",
    picture: "https://pbs.twimg.com/profile_images/1832824166/34291_421706182824_548192824_4610945_62073_n_400x400.jpg",
    twitter: "joaojeronimo",
    email: "contact@diogocunha.me",
    phone: "+351 919 417 538"
  }];

  function getAll() {
    return contacts;
  }

  function get(id) {
    return contacts[id-1];
  }

  function save(contact) {
    if(contact.id) {
      contacts[contact.id-1] = contact;
    } else {
      contact.id = lastId++;
      contact.push(contact);
    }
    return contact;
  }

  return {
    getAll: getAll,
    get: get,
    save: save
  };
}

angular
  .module('angular-addressbook')
  .factory('ContactService', ContactService);