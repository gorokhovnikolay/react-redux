import {makeAutoObservable} from 'mobx'
import { FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const store =makeAutoObservable ({
  contacts:[] as ContactDto[],
  contact:{} as ContactDto | undefined, 
  group:{} as GroupContactsDto| undefined,
  groups:[] as GroupContactsDto[] ,
  getCurrentContacts(id:ContactDto['id']){
    store.contact = this.contacts.find((item)=>item.id === id) 
  },
  getCurrentGroup(id:GroupContactsDto['id']){
    store.group = this.groups.find((item)=>item.id === id) 
  },
  filterContacts(params:Partial<FilterFormValues>){
    let findContacts: ContactDto[] = store.contacts
            if (params.name) {
              const fvName = params.name.toLowerCase();
              findContacts = findContacts.filter(
                ({ name }) => name.toLowerCase().indexOf(fvName) > -1
              );
            }
        
            if (params.groupId) {
              const groupContacts = store.groups.find(
                (item:GroupContactsDto) => item.id === params.groupId
              );
        
              if (groupContacts) {
                findContacts = findContacts.filter(({ id }) =>
                  groupContacts.contactIds.includes(id)
                );
              }
            }
            store.contacts = findContacts
  },
  *getContacts(){
    const data:ContactDto[] = yield fetch('https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json').then(res=>res.json())
    
    store.contacts = data
  },
  *getGroups(){
    const data:GroupContactsDto[] = yield fetch('https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/0/h/f1e98b0d70d16a909818b03b72415733.json').then(res=>res.json())
    store.groups = data
  }
})

