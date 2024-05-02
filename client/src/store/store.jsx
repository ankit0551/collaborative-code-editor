import {create} from 'zustand';

let curruser = localStorage.getItem('_l_user');
const useStore = create((set) => ({
    user : curruser ?  JSON.parse(curruser) : null,
    setUser : (newUser) => set({user: newUser}),
}))

export default useStore;