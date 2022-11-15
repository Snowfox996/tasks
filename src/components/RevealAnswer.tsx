import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, set_visible] = useState<boolean>(true);
    const [answer, set_answer] = useState<string>("Reveal Answer");

    function flip_visible(): void {
        set_visible(!visible);
        set_answer("42");
    }
    return (
        <div>
            <Button onClick={flip_visible}>{answer}</Button>
            {visible && <div>{answer}</div>}
        </div>
    );
}
