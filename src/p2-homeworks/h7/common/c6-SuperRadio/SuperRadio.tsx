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
        // onChange, onChangeOption
        debugger
        if (onChange) {
            onChange(e)
        }
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions = options ? options.map((o, i) => {
        return ( // map options with key
        <div key={new  Date().toString()}>elem
        {/*<label*/}
        {/*       // className={css.radio}*/}
        {/*>label*/}
        {/*    <input*/}
        {/*        name={name}*/}
        {/*        type={'radio'}*/}
        {/*        value={o}*/}
        {/*        onChange={onChangeCallback}*/}
        {/*        checked={o === value}*/}
        {/*        // name, checked, value, onChange*/}
        {/*    />*/}
        {/*    <span className={css.radio_text}>span{o}</span>*/}
        {/*</label>*/}
        </div>

    )}) : ['empty'];
    console.log('o',mappedOptions)
    return (
        <>in radio [{JSON.stringify(options)}
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
