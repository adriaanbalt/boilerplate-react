export default {

	api : {
		dev: '',
		qa: '',
		prod: '',
	},

	constants : {
		ROOT_PATH: "/",
		API_VERSION: "v1",
		TRANSLATE_DEFAULT_TEXT: "TRANSLATE"
	},

	getApiUrl () {
		return this.api.dev;
	}

};
