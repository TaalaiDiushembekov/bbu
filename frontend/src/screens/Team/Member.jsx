import React, { useEffect, useState } from "react";
import { useGetTeamQuery } from "../../redux/team/team.api";
import { Box, Grid, Typography } from "@material-ui/core";
import Spinner from "../../components/spinner";
import TextField from "../../components/UI/Form/TextField/TextField";

import "./Team.css";

const Member = () => {
    const { data, isLoading } = useGetTeamQuery();

    const initState = {
        name: "",
        description: "",
        position: "",
        order: "",
        image: "",
    };

    const [member, setMember] = useState(initState);

    console.log(data)
    useEffect(() => {
        if (data && !isLoading) {
            setMember((prevState) => {
                const newState = { ...prevState };

                Object.keys(...data).forEach((key) => {
                    if (newState.hasOwnProperty(key)) {
                        // if (key === "org_director_passport") {
                        //     newState.org_director_passport = {
                        //         ...newState.org_director_passport,
                        //         ...data[key],
                        //     };
                        // } else {
                        newState[key] = data[0][key];
                        // }
                    }
                });
                return newState;
            });
        }
    }, [isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{paddingTop: '70px'}}>
            <Typography variant="h4" component="h3">
                team
            </Typography>
            {isLoading ? (
                <Spinner />
            ) : (
                <Box mt={3}>
                    <Grid container>
                        {data?.map((mem) => (
                            <div key={mem._id}>
                            <div className="input-wrapper">
                                <TextField
                                    type="text"
                                    name="org_name"
                                    value={member?.name}
                                    // onChange={inputChangeHandler}
                                    label="Имя"
                                    required={true}
                                />
                            </div>
                                <div className="input-wrapper">
                                    <TextField
                                        type="text"
                                        name="org_name"
                                        value={member?.description}
                                        // onChange={inputChangeHandler}
                                        label="Описание"
                                        required={true}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <TextField
                                        type="text"
                                        name="org_name"
                                        value={member?.position}
                                        // onChange={inputChangeHandler}
                                        label="Должность"
                                        required={true}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <TextField
                                        type="text"
                                        name="org_name"
                                        value={member?.order}
                                        // onChange={inputChangeHandler}
                                        label="Очередь в списке"
                                        required={true}
                                    />
                                </div>
                                <div className="input-wrapper">
                                    <TextField
                                        type="text"
                                        name="org_name"
                                        value={member?.image}
                                        // onChange={inputChangeHandler}
                                        label="Имя файла"
                                        required={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </Grid>
                </Box>
            )}
        </div>
    );
};

export default Member;
