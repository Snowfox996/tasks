import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ColoredBox } from "../bad-components/ColoredBox";

interface ColorProps {
    color: string;
    name: string;
}

function Colorbox({ color, name }: ColorProps): JSX.Element {
    return (
        <Form.Group>
            <Form.Label
                data-testid="colored-box"
                color={color}
                style={{ backgroundColor: color }}
            >
                {name}
            </Form.Label>
        </Form.Group>
    );
}

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [chosenColor, setChosenColor] = useState<number>(0);
    const colorList = [
        "#e87c64",
        "#6477e8",
        "#ab64e8",
        "#64e88a",
        "#64e8d3",
        "#64abe8",
        "#e8a864",
        "#e38282"
    ];
    const chosenColorName = [
        "Red",
        "Blue",
        "Purple",
        "Green",
        "Teal",
        "Light Blue",
        "Orange",
        "Light red"
    ];
    function updateChosen(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <li></li>
            <ul>
                <Form.Group>
                    {chosenColorName.map((color: string) => (
                        <Form.Check
                            key={color}
                            inline
                            type="radio"
                            name="color"
                            onChange={updateChosen}
                            label={color}
                            value={color}
                        />
                    ))}
                </Form.Group>
            </ul>
            <div>
                The color is <Colorbox name={name} color={color} />
            </div>
        </div>
    );
}
