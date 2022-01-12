/* eslint-disable */
import axios from 'axios'
import tags from '../../tags'

const mailerUrl = 'https://estudiomaquinario.api-us1.com/api/3/'
const ApiToken = '3dcf19c27562a90e78f8e6080a9502ca5305101f9b4b7cfeb86f4c2c76eb006f5f145ad7'

export default async (
  request,
  response
) => {
  const { name, email, phone, tag } = request.body

  const api = axios.create({
    baseURL: mailerUrl,
    headers: {
        'Api-Token': `${ApiToken}`,
        'Accept' : 'application/json',
        'content-type': 'application/json',
    }
  });


  const contact = {
    "contact": {
        "email": email,
        "firstName": name,
        "lastName": '',
        "phone": phone
    }
  };
  const searchContact = await api.get(`contacts?email=${email}`)
  const contactExists = !!parseFloat(searchContact.data.meta.total)

  if(contactExists){
    const addedTag = await api.post(`${mailerUrl}/contactTags`, {
      "contactTag": {
        "contact": searchContact.data.contacts[0].id,
        "tag": tags.pl
      }
    })
    if(tag){
      const addedPublicTag = await api.post(`${mailerUrl}/contactTags`, {
        "contactTag": {
          "contact": searchContact.data.contacts[0].id,
          "tag": tags[tag]
        }
      })
    }
    return response.json(addedTag.data)
  } else {
    const addedContact = await api.post(`${mailerUrl}/contacts`, contact)
    await api.post(`${mailerUrl}/contactTags`, {
      "contactTag": {
        "contact": addedContact.data.contact.id,
        "tag": tags.pl
      }
    })
    const addedPublicTag = await api.post(`${mailerUrl}/contactTags`, {
      "contactTag": {
        "contact": addedContact.data.contact.id,
        "tag": tags[tag]
      }
    })
    console.log(addedPublicTag);
    return response.json(addedContact.data)
  }
}
