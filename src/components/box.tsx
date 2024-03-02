import React, {useState} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Select from "react-select";

interface ComponentBoxProps {
    onGenerationSelect: (generation: number) => void;
}

const ComponentBox: React.FC<ComponentBoxProps> = ({onGenerationSelect}) => {

    const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);

    const handleGenerationSelect = (selectedOption: any) => {
        setSelectedGeneration(selectedOption.value);
        onGenerationSelect(selectedOption.value);
    }



    const dataOptions = [
        { value: 1, label: "1° Generation" },
        { value: 2, label: "2° Generation" },
        { value: 3, label: "3° Generation" },
        { value: 4, label: "4° Generation" },
        { value: 5, label: "5° Generation" },
    ];

    const customStyles = (value: any) => ({
        control: (provided: any) => ({
            ...provided,
            alignItems: "baseline",
            backgroundColor: "white",
            color: "black",

        }),
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? "black" : "black",
            backgroundColor: state.isSelected ? "lightblue" : "white",
            "&:hover": {
                backgroundColor: "lightblue",
                color: "black",
            },
        }),
    })
    const listado = (val:any) => {
        setTexto4(val.label);
    }
    const [texto4, setTexto4] = useState(null);

    return(
        <div className="container-box">
            <div className="p-2">
                <label>Generation: </label>
            </div>
            <div >
                <Select
                options = {dataOptions}
                styles = {customStyles(texto4)}
                onChange = {handleGenerationSelect}
                placeholder =   "Select a generation"/>
            </div>
        </div>
    )
}

export default ComponentBox;