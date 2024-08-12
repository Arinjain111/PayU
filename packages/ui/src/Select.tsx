"use client"

export const Select = ({ options, onSelect }: {
    onSelect: (value: string) => void;
    options: {
        key: string,
        value: string
    }[]; 
}) => {
    return <select onChange={(e) => {
        onSelect(e.target.value)
    }}>
        {options.map(option => <option value={option.key}>{option.value}</option>)}
    </select>
}