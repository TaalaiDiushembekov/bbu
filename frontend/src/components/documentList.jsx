import { Box, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import UploadInfoTwo from "./upload_info_two";

const DocumentList = ({docs}) => {
    return (
        <>
            <Box
                gridColumn={"span 12"}
                display={"grid"}
                gridTemplateColumns="repeat(12, 1fr)"
            >
                <Box gridColumn={"span 8"}>
                    <List>
                        {docs.map((doc) => (
                            <div key={doc?._id}>
                                <ListItem>
                                    <ListItemText
                                        primary={"Название документа"}
                                    />
                                    <ListItemText
                                        primary={"Ссылка на гугл диск"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={doc?.name} />
                                    <ListItemText>
                                        <a href={`http://${doc?.link}`}>
                                            {doc?.link}
                                        </a>
                                    </ListItemText>
                                </ListItem>
                            </div>
                        ))}
                    </List>
                </Box>
                <Box gridColumn={"span 4"}>
                    <UploadInfoTwo />
                </Box>
            </Box>
        </>
    );
};

export default DocumentList;
