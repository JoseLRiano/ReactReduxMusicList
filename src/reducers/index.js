import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title: 'Imagen', duration: '4:05'},
        { title: 'Hey Jude', duration: '3:00'},
        { title: 'I Cant get no Satisfation', duration: '3:50'},
        { title: 'Smells like Teen spirit', duration: '3:20'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({ 
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});