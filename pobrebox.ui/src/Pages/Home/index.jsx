import React from 'react';
import { Section, SideMenu, MenuForm } from '../../Components';
import data from '../../data';

export default function index() {
    return (
        <>
            <Section
                color= "blue"
                title= {data[0].title}
                description= {data[0].description}

            />
            <Section
                color= "beige"
                title= {data[1].title}
                description= {data[1].description}

            />
            <Section
                color= "blue"
                title= {data[2].title}
                description= {data[2].description}

            />
            <Section
                color= "white"
                title= {data[3].title}
                description= {data[3].description}

            />
            <Section
                color= "black"
                title= {data[4].title}
                description= {data[4].description}

            />
            <SideMenu>
                <MenuForm/>
            </SideMenu>
        </>
            
        
    )
}
