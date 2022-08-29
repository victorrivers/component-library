import { useEffect, useRef } from "react";
import run from "../../code-exercises/count-div/count-div";

export function CodeExercises(): JSX.Element {
	const loaded = useRef(false);

	useEffect(() => {
		if (!loaded.current) {
			loaded.current = true;
			run();
		}
	}, []);
	return <code>{"hello"}</code>;
}
