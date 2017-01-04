import { observable } from 'mobx';

class CountdownStore {
    @observable cdData = JSON.parse(localStorage.getItem('countdownData')) || {};

    submitData = (data) => {
        this.cdData = data;
        localStorage.setItem('countdownData', JSON.stringify(this.cdData));
    }
}

export default new CountdownStore;
