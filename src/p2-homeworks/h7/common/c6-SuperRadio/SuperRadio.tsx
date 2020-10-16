import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import css from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        if (onChange) {
            onChange(e)
        }
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions = options ? options.map((o, i) => {
        return (
        <label key={name + '- ' + i}
               className={css.radio}
        >
            <input
                name={name}
                type={'radio'}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
            />
            <span className={css.radio_text}>{o}</span>
        </label>

    )}) : ['empty'];
    // console.log('o',mappedOptions)
    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
