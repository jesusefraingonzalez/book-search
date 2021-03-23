import { React, Component } from "react";
import { TextField } from "@material-ui/core/";
import Button from "@material-ui/core/Button"
class SearchPage extends Component {

	render() {
		return (
			<>
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				<Button variant="contained" color="primary">
					Search
    			</Button>
			</>
		);
	}
}

export default SearchPage;