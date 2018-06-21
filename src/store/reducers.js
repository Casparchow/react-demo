function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
    console.log(action)
    return {
      name: action.name, // 使用action携带的新name
      email: state.email, // 不需要修改，使用旧state的值
      message: state.message // 不需要修改，使用旧state的值
    }

    case 'CHANGE_EMAIL':
    return {
      name: state.name, // 使用action携带的新name
      email: action.email, // 不需要修改，使用旧state的值
      message: state.message // 不需要修改，使用旧state的值
    }

    case 'CHANGE_MESSAGE':
    return {
      name: state.name, // 使用action携带的新name
      email: state.email, // 不需要修改，使用旧state的值
      message: action.message // 不需要修改，使用旧state的值
    }
    default:
    return state  // 没有匹配的action type，返回原来的state
  }
}

function reducer(state, action) {
  return {
    formData: formReducer(state.formData, action),
  }
}

export default reducer