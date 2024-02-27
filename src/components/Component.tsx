import React, {useState} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Select from "react-select";

const myComponent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [texto, setTexto] = useState("Hola Mundo");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [texto2, setTexto2] = useState();

    const buttonClick = () => {
        // @ts-ignore
        setTexto2(texto)
    }

    // Controles para los Radio Buttons
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rbGenero, setRbgenero] = useState("Femenino");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [texto3, setTexto3] = useState(rbGenero);

    const seleccionado = (val:any) => {
        setRbgenero(val);
        setTexto3(val);
    }

    // Controles para los Checks Boxes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [chkOpciones, setChkopciones] = useState(["Ensalada"]);

    const multiOpcion = (val:any) => {setChkopciones(val);}


    // Controles para los Radio Buttons
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [texto4, setTexto4] = useState(null);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dataOptions = [
        { value: 1, label: "Opción 1" },
        { value: 2, label: "Opción 2" },
        { value: 3, label: "Opción 3" },
        { value: 4, label: "Opción 4" },
        { value: 5, label: "Opción 5" },
    ];

    const listado = (val:any) => {
        setTexto4(val.label);
    }

    const customStyles = (value: any) => ({
        control: (provided: any) => ({
            ...provided,
            alignItems: "baseline",
            backgroundColor: "white",
            color: "black",

        }),
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? "white" : "black",
            backgroundColor: state.isSelected ? "red" : "white",
            "&:hover": {
                backgroundColor: "lightblue",
                color: "black",
            },
        }),
    })

    return (
        <div>
            <h5>Mi primer Componente</h5>
            <div>
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
                <button onClick={buttonClick}>Actualizar</button>
                <p>{texto}</p>
                <p>{texto2}</p>
            </div>
            <br/>
            <h5>Uso de Radio Buttons</h5>
            <div>
                <ToggleButtonGroup type="radio" name="Oneoption" defaultValue={"Femenino"} onChange={seleccionado}>
                    <ToggleButton id="tbrFem" value={"Femenino"} variant="outline-warning">Femenino</ToggleButton>
                    <ToggleButton id="tbrMas" value={"Masculino"} variant="outline-warning">Masculino</ToggleButton>
                    <ToggleButton id="tbrOtr" value={"Otro"} variant="outline-warning">Otro</ToggleButton>
                </ToggleButtonGroup>
                <p>{texto3}</p>
            </div>
            <br/>
            <h5>Uso de CheckBoxes</h5>
            <div>
                <ToggleButtonGroup type="checkbox" name="Multipleoptions" defaultValue={["Ensalada"]}
                                   onChange={multiOpcion}>
                    <ToggleButton id="chkOpc1" value={"Ensalada"} variant="outline-success">Ensalada</ToggleButton>
                    <ToggleButton id="chkOpc2" value={"Pure Nuestra Tierra"} variant="outline-success">Pure Nuestra
                        Tierra</ToggleButton>
                    <ToggleButton id="chkOpc3" value={"Vegetales al vapor"} variant="outline-success">Vegetales al
                        vapor</ToggleButton>
                    <ToggleButton id="chkOpc4" value={"Vegetales salteados"} variant="outline-primary">Vegetales
                        salteados</ToggleButton>
                </ToggleButtonGroup>
                <ol>
                    {
                        chkOpciones.map((valor, index) => {
                            return (
                                <li key={index}>
                                    {valor}
                                </li>);
                        })
                    }
                </ol>
            </div>

            <br />
            <h5>Uso de Comboxes (selected)</h5>
            <div>
                <Select
                    options={dataOptions}
                    styles={customStyles(texto4)}
                    onChange={listado}
                    placeholder="Seleccione una opción"
                />
                <p>{texto4}</p>
            </div>


        </div>
    )
}

export default myComponent;
