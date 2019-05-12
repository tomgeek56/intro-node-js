const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = path.join(path.dirname('utils'), '/contacts.json')

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  console.log('contactsLocation')
  // console.log(contactsLocation)
  const file = fs.readFileSync('./contacts.json', {encoding: 'utf-8'})
  console.log(file);
    return {firstName: 'Tomek', lastName : 'ceg', phoneNumber: '726331041'}
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  console.log('save file')
  console.log(contacts)
  fs.writeFileSync(contactsLocation, contacts)
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

