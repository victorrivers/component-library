import { useEffect, useRef } from "react";
//import run from "../../code-exercises/binary-gap/binary-gap";
//import run from "../../code-exercises/cyclic-rotation/cyclic-rotation";
//import run from "../../code-exercises/smallest-positive-integer/smallest-positive-integer";
//import run from "../../code-exercises/frog-jump/frog-jump";
import run from "../../code-exercises/count-conforming-bitmasks/count-conforming-bitmasks";

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
