export const addComment = (id, avatar, name, text, isRated) => {
  return {
    type: 'ADD_COMMENT',
    id,
    avatar,
    name,
    text,
    isRated
  }
};

export const editComment = (id, avatar, name, text, isRated) => {
  return {
    type: 'EDIT_COMMENT',
    id,
    name,
    text,
    isRated
  }
};

export const removeComment = id => {
  return {
    type: 'REMOVE_COMMENT',
    id
  }
}