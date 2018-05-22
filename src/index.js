import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAmGBY6J7OK9aUGe726l-e6jlNIIe_crl4';

// Create a new component. This component should propduce some HTML.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
