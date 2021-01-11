

let store = {
    _state: {
        profilePage :{
            postsData :[
                {id: 1, message: 'Hi, how are you?', numb: 122},
                {id: 2, message: 'It\'s my first post', numb: 2},
                {id: 3, message: 'Sasha', numb: 22},
                {id: 4, message: 'Masha', numb: 3},
                {id: 5, message: 'Kos', numb: 1},
                {id: 6, message: 'Nikita', numb: 333},
                {id: 7, message: 'Viktoria', numb: 2},
                {id: 8, message: 'Polina', numb: 11}
            ],
            newPostText: 'write here',
        },

        dialogsPage :{
            dialogsData :[
                {id: 1, name: 'Dima', sr: 'https://cdnimg.rg.ru/i/gallery/a0874522/13_ac019641.jpg'},
                {id: 2, name: 'Kirill', sr: 'https://navegante.ru/Insignia/Down/x1_1792.jpg'},
                {id: 3, name: 'Sasha', sr: 'https://sun9-11.userapi.com/c852220/v852220524/1d269f/J-UDfuE3yCw.jpg'},
                {id: 4, name: 'Masha', sr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKEcXt5zZdFS65en6PCskPTPZfp1XSYiKxA&usqp=CAU'},
                {id: 5, name: 'Kos', sr: 'https://cdnimg.rg.ru/i/gallery/a0874522/2_75c5b6f1.jpg'},
                {id: 6, name: 'Nikita', sr: 'https://i0.wp.com/forma-odezhda.ru/image/data/wikipedia/commons/d/df/Military_by_Lev_Kiel_28.jpg'},
                {id: 7, name: 'Viktoria', sr: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIX9TNuJFoHGHEirMyTcHY1x5aRc_KVdpew&usqp=CAU'},
                {id: 8, name: 'Polina', sr: 'https://mtdata.ru/u5/photo295F/20187668635-0/original.jpg'}
            ],
            messagesData :[
                {id: 1, text: 'privet', touched: 'no'},
                {id: 2, text: 'ne pichi mne bolche', touched: 'no'},
                {id: 3, text: 'kysay ego', touched: 'no'},
                {id: 4, text: 'nichego', touched: 'no'},
                {id: 5, text: 'poka', touched: 'no'},
                {id: 6, text: 'ffffffffffff', touched: 'no'}
            ]
        },

        avaPage :{
            avaData :[
                {id: 1, src: 'https://cdnimg.rg.ru/i/gallery/a0874522/13_ac019641.jpg'},
                {id: 2, src: 'https://navegante.ru/Insignia/Down/x1_1792.jpg'}
            ]
        },

        sidebar :{}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('fff');
    },

    addPost(){
        let newPost = {
            id: 9,
            message: this._state.profilePage.postMessage,
            numb: 5
        };

        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }

}


window.store = store;
export default store;