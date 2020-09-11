import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    let mappedOptions = options?.map( (i) => <option key={i.toString()}>{i}</option>) ; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        let currentValueTextArea = e.currentTarget.value
        onChangeOption && onChangeOption(currentValueTextArea)
    }

    return (

        <select className={styles.box} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
