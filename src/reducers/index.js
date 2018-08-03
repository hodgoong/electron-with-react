const initialState = {
    angular: 0,
    react: 0,
    vuejs: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE_ANGULAR':
            console.log('Voted Angular');
            return Object.assign({}, state, {
                angular: state.angular + 1
            })
        case 'VOTE_REACT':
            console.log('Voted React');
            return Object.assign({}, state, {
                react: state.react + 1
            })
        case 'VOTE_VUEJS':
            console.log('Voated Vuejs');
            return Object.assign({}, state, {
                vuejs: state.vuejs + 1
            })
        default:
            return state
    }
}