const comments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      const commentsList = [
        ...state,
        {
          id: action.id,
          avatar: action.avatar,
          name: action.name,
          text: action.text,
          isRated: action.isRated
        }
      ];

      localStorage.setItem('comments', JSON.stringify(commentsList));
      
      return commentsList;

    case 'EDIT_COMMENT':
      console.log(action);

      state.forEach(comment => {
        console.log(comment.id, action.id);
        if(comment.id === action.id) {
          comment.avatar = (action.avatar !== undefined) ? action.avatar : comment.avatar,
          comment.name = (action.name !== undefined) ? action.name : comment.name,
          comment.text = (action.text !== undefined) ? action.text : comment.text,
          comment.isRated = (action.isRated !== undefined) ? action.isRated : comment.isRated
        }
      });

      localStorage.setItem('comments', JSON.stringify(state));

      return [...state];

    case 'REMOVE_COMMENT':
      state.splice(action.id, 1);

      console.log(state);
      
      localStorage.setItem('comments', JSON.stringify(state));

      return [...state];

    default:
      return state;
  }
}

export default comments;