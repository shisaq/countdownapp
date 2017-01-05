import { observable } from 'mobx';

class CountdownStore {
    @observable cdData = JSON.parse(localStorage.getItem('countdownData')) || {};
    @observable t;
    @observable sec;
    @observable min;
    @observable hours;
    @observable days;

    updateTime = () => {
        const timeStamp = Date.parse(this.cdData.deadline);
        this.t = timeStamp - Date.parse(new Date());
        this.sec = (this.t / 1000) % 60;
        this.min = Math.floor((this.t / 1000 / 60) % 60);
        this.hours = Math.floor((this.t / (1000 * 60 * 60)) % 24);
        this.days = Math.floor(this.t / (1000 * 60 * 60 * 24));
    }

    submitData = (data) => {
        let timeStamp;
        if (data.deadline) {
            const timezone = -(new Date().getTimezoneOffset() / 60 * 100);
            timeStamp = new Date(data.deadline + ' 23:59:59 GMT' + timezone);
        } else if (data.duration) {
            const timezone = -(new Date().getTimezoneOffset() / 60 * 100);
            const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1;
            const year = now.getFullYear();

            const today = new Date(month + '-' + day + '-' + year + ' 23:59:59 GMT' + timezone);

            const deadline = today.setDate(today.getDate() + parseInt(data.duration) - 1);
            timeStamp = new Date(deadline);

        } else {
            alert('请输入正确的日期。');
            return;
        }
        data.deadline = timeStamp;
        this.cdData = data;
        localStorage.setItem('countdownData', JSON.stringify(this.cdData));
    }
}

export default new CountdownStore;
