export default (notifyFxn, _text, _type = 'danger') => {
    notifyFxn({
        text: _text,
        position: 'top-right',
        type: _type,
        removeAfter: 2000
    })
}