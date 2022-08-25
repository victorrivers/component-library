import { useEffect, useRef } from "react";
//import run from "../../code-exercises/binary-gap/binary-gap";
//import run from "../../code-exercises/cyclic-rotation/cyclic-rotation";
//import run from "../../code-exercises/smallest-positive-integer/smallest-positive-integer";
//import run from "../../code-exercises/frog-jump/frog-jump";
import run from "../../code-exercises/count-conforming-bitmasks/count-conforming-bitmasks";
//import run from "../../code-exercises/permutation-check/permutation-check";
//import run from "../../code-exercises/sorting-distinct/distinct";
//import run from "../../code-exercises/tree-height/tree-height";
//import run from "../../code-exercises/string-symmetry-point/string-symmetry-point";

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
