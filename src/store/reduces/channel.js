const initValue = {
  list: [],
  active: 0
}
export default function getChannelList(prevState = initValue, action) {
   switch(action.type) {
     case 'channel/getList':
       return {
         ...prevState,
         list: action.list
       }
     case 'channel/changeActive':
       return {
         ...prevState,
         active: action.id
       } 
     default:
       return prevState
   }
}