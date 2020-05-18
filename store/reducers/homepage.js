export default function homepage(
	state = {
		activeProject: null,
        displayMeta: false
	},
	action){
    switch (action.type) {
        case 'SET_ACTIVE_PROJECT':
            return {...state, activeProject: action.payload};
        case 'SET_DISPLAY_META':
            return {...state, displayMeta: action.payload}    
        default:
            return state
    }
};