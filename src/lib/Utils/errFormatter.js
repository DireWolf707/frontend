export default (e) => {
    // assign err to response or null in case of Connection Error
    let err = e.response ? e.response.data.message : null;
	// check specifically for null first as type of null is object => server down
	if (err === null) {
		return [{text: err}];
	}
	// then check for string
	else if (typeof err === typeof ''){
		// if lenght is 1 after splitting, return it no need to process => my custom errors
		if (err.split(',').length == 1) {
			return [{text: err}]
		}
		// mongDB errors
		err = err.replace(':', ',').split(',').slice(1).map( e => {
			return {text: e.trim()};
		});
		return err;
	} 
	// then else because [] (and {}) are also type of object as null => validation errors
	else {
		err = err.map( e => {
			return {text: `${e.param}: ${e.msg}`}
		})
		return err;
	}
    // return array of notification in every case as notification fxn takes array
}