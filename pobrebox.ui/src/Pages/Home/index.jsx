import React, {useEffect, useState} from 'react';
import { Section, SideMenu, MenuForm } from '../../Components';
import data from '../../data';

export default function Home() {

    //--> Remove access to Change Password Route
    useEffect(() => {
        localStorage.removeItem("changePass");
    
    },[]);
    //<--

    const [ openForm, setOpenForm ] = useState(false);
    return (
        <>
            <Section
                color= "blue"
                title= {data[0].title}
                description= {data[0].description}
                setOpenForm={setOpenForm}

            />
            <Section
                color= "beige"
                title= {data[1].title}
                description= {data[1].description}
                setOpenForm={setOpenForm}

            />
            <Section
                color= "blue"
                title= {data[2].title}
                description= {data[2].description}
                setOpenForm={setOpenForm}

            />
            <Section
                color= "white"
                title= {data[3].title}
                description= {data[3].description}
                setOpenForm={setOpenForm}

            />
            <Section
                color= "black"
                title= {data[4].title}
                description= {data[4].description}
                setOpenForm={setOpenForm}

            />
            <SideMenu openForm={openForm} >
                <MenuForm open={openForm} setOpenForm={setOpenForm}/>
            </SideMenu>
        </>
            
        
    )
}
