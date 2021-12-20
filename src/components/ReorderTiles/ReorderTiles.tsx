import React, {useState} from "react";
import {Reorder} from "framer-motion";

const initialValues = [1, 2, 3, 4, 5];

const ReorderTiles: React.FC = () => {

    const [values, setValues] = useState(initialValues);

    return (
        <Reorder.Group values={values} onReorder={setValues}>
            {values.map((value) => (
                <Reorder.Item
                    value={value}
                >
                    {value}
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
};

export default ReorderTiles;