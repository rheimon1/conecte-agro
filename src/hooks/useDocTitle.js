import { useEffect } from "react";

const useDocTitle = (title) => {
	useEffect(() => {
		if (title) {
			document.title = "ConecteAgro";
		} else {
			document.title = "ConecteAgro";
		}
	}, [title]);

	return null;
};

export default useDocTitle;
