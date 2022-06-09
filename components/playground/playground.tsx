import React, { FC, useState } from "react";
import styles from "./playground.module.scss";

interface PlaygroundProps<T> {
    component: FC<T>;
    componentProps: T;
}

export function Playground<T>(props: PlaygroundProps<T>): JSX.Element {
    const { component } = props;

    const [state, setState] = useState(props.componentProps);

    return (
        <>
            <h1>{component.name}</h1>
            <div className={styles.container}>
                {component(state)}
            </div>
            <div className={styles["container-table"]}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Defined</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(state).map((key, index) => {

                            const value = state[key as keyof T] as any;

                            let input;
                            const type = typeof value;
                            switch (type) {
                                case "string":
                                case "number":
                                    input = <input type="text" onChange={(e) => setState(s => {
                                        const val = type === "string" ? e.target.value : +e.target.value;
                                        const clone = { ...s };
                                        clone[key as keyof T] = val as any;
                                        return clone;
                                    })} value={value} />;
                                    break;
                                case "boolean":
                                    input = <input type="radio" value={value} defaultChecked={value} />;
                                    break;
                                case "object":
                                case "function":
                                    input = <input disabled />;
                                    break;
                            }

                            return <tr key={index}>
                                <td>{key}</td>
                                <td><code>{type}</code></td>
                                <td>{(value !== undefined).toString()}</td>
                                <td>{input}</td>
                            </tr>;
                        })}
                    </tbody>
                </table>
            </div >
        </>)
}