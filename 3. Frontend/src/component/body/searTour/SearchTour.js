import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBContainer,
} from 'mdb-react-ui-kit';
import SearchItemDomestic from './SearchItemDomestic';
import SearchItemForeign from './SearchItemForeign';


export default function App() {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    return (

        <MDBContainer className='my-5' >
            <MDBTabsContent>
                <MDBTabs pills className='mb-3 text-search'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className={justifyActive === 'tab1' ? 'bg-dark text-while' : 'text-black'} >
                            Du lịch trong nước
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className={justifyActive === 'tab2' ? 'bg-dark text-while' : 'text-black'}>
                            Du lịch nước ngoài
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={justifyActive === 'tab1'}><SearchItemDomestic /></MDBTabsPane>
                    <MDBTabsPane show={justifyActive === 'tab2'}><SearchItemForeign /></MDBTabsPane>
                </MDBTabsContent>
            </MDBTabsContent>
        </MDBContainer>
    );
}