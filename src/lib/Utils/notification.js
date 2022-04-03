export default (notifyFxn, notifyArray) => {
    const defaultTimer = 2000;
    notifyArray.forEach((notify, i) => {
        notifyFxn({
            text: notify.text || 'Server is Down! Try again Later...',
            position: notify.position || 'top-right',
            type: notify.type || 'danger',
            removeAfter: notify.removeAfter || ( defaultTimer + 500*i )
        });
    });
}