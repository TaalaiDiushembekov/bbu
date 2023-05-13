import {
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import React from "react";
import UploadInfoTwo from "./upload_info_two";

import { useDeleteDocMutation } from "../redux/documents/docs.api";

const DocumentList = ({ docs, org_id }) => {
    const [deleteDoc, response] = useDeleteDocMutation();
    const handleClick = (id) => {
        deleteDoc(id);
        console.log(response);
    };

    return (
        <>
            <Box
                gridColumn={"span 12"}
                display={"grid"}
                gridTemplateColumns="repeat(12, 1fr)"
            >
                <Box gridColumn={"span 8"}>
                    <List>
                        <ListItem>
                            <ListItemText primary={"Название документа"} />
                            <ListItemText primary={"Ссылка на гугл диск"} />
                        </ListItem>
                        {docs.map((doc) => (
                            <div key={doc?._id}>
                                <ListItem>
                                    <ListItemText primary={doc?.name} />
                                    <ListItemText>
                                        <a href={`http://${doc?.link}`}>
                                            {doc?.link}
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <Button
                                    onClick={() => handleClick(doc?._id)}
                                    variant="outlined"
                                    color="secondary"
                                >
                                    Удалить документ
                                </Button>
                            </div>
                        ))}
                    </List>
                </Box>
                <Box gridColumn={"span 4"}>
                    <UploadInfoTwo org_id={org_id}/>
                </Box>
            </Box>
        </>
    );
};

export default DocumentList;
