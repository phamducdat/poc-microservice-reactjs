import React from 'react';
import {Button} from "antd";

const DP_Button = props => {

    const onClick = () => {
        console.log("dat with onClick = test")
    }

    return (
        <>
            <Button
                onClick={onClick}
                type={"primary"}>
                Datpd
            </Button>

        </>
    );
};

DP_Button.propTypes = {};

export default DP_Button;
