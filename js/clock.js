class Clock {
    constructor() {
        this._clockEl = document.querySelector('#clock');
        this._showSeconds = false; // Toggle state
        this._setTime = this._setTime.bind(this);
        this._handleClick = this._handleClick.bind(this); // Click handler
        this._startClock();
        this._clockEl.addEventListener('click', this._handleClick);
    }

    // Append 0 before time elements if less hour's than 10
    _appendZero = k => {
        if (k < 10) {
            return '0' + k;
        } else {
            return k;
        }
    }

    _handleClick = () => {
        this._showSeconds = !this._showSeconds; // Toggle state
        this._setTime(); // Immediate update
    }

    _setTime = () => {
        // Date object
        const date = new Date();

        // Set hour, minute, second
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let midDay = 'AM';
        
        // Assigning
        midDay = (hour >= 12) ? 'PM' : 'AM';
        hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
        hour = this._appendZero(hour);
        min = this._appendZero(min);
        sec = this._appendZero(sec);

        // Conditional display with/without seconds
        if (this._showSeconds) {
            this._clockEl.innerText = `${hour}:${min}:${sec} ${midDay}`;
        } else {
            this._clockEl.innerText = `${hour}:${min} ${midDay}`;
        }
    }

    _startClock = () => {
        this._setTime();
        setInterval(this._setTime, 1000);
    }
}
