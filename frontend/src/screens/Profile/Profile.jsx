import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./Profile.css";
import InformationContainer from "./InformationContainer";

const Profile = () => {
    const accessToken = useSelector((s) => s.auth);
 
    console.log(accessToken);
    const a = () => {

    }
    // useEffect(()=> {

    // }, [org])
    const [value, setValue] = React.useState("one");
    // const [org, setOrg] = useState()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="profile">
            {accessToken && (
                <>
                    <Container>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            centered
                        >
                            <Tab value="one" label="Реквизиты" />
                            <Tab value="two" label="Документы" />
                            <Tab value="three" label="Акты сверки" />
                        </Tabs>
                    </Container>
                    <InformationContainer />
                </>
            )}
        </div>
    );
};

export default Profile;
