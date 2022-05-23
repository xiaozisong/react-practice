export default function news(prevState = [], action) {
   switch(action.type) {
     case 'news/getList':
      return action.list
    default: 
      return prevState
   }
}