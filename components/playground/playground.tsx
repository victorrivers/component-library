import React from "react";
import styles from "./playground.module.css";

interface PlaygroundProps<T> {
    component: React.FC<T>
    componentProps: T
}

export function Playground<T>(props: PlaygroundProps<T>): JSX.Element {
    const { component } = props;

    return <><h1>{component.name}</h1><div className={styles.container}>
        {component(props.componentProps)}
    </div></>
}