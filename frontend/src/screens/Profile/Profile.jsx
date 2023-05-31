import React, { useEffect, useState } from "react";
import { Container, Tab, Tabs } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./Profile.css";
import InformationContainer from "./InformationContainer";
import Requisite from "../../components/Customer/Requisite/requisite";
import Documents from "../../components/Customer/Documents/documents";

const SelectedComponent = ({tab}) => {
    const org = useSelector(s => s.org)
    const docs = useSelector(s => s.document)
    if(tab === 'one'){
        return(
            <Requisite org={org}/>
        )
    }
    if(tab === 'two'){
        return(
            <Documents docs={docs}/>
        )
    }
}

const Profile = () => {
    const {accessToken} = useSelector((s) => s.auth);
 
    const [tab, setTab] = useState('one')

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    

    return (
        <div className="profile">
            {accessToken && (
                <>
                    <Container>
                        <Tabs
                            value={tab}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            centered
                        >
                            <Tab value="one" label="Реквизиты" />
                            <Tab value="two" label="Документы" />
                            {/* <Tab value="three" label="Акты сверки" /> */}
                        </Tabs>
                        <SelectedComponent tab={tab}/>
                    </Container>
                </>
            )}
        </div>
    );
};

export default Profile;
