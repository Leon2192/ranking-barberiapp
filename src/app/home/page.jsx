'use client'
import React, { useState, useEffect, useContext } from "react";
import { AvatarIcon, Button, Flex, Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { CiHome, CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GrConfigure } from "react-icons/gr";
import { Divider } from "@nextui-org/react";
import { FaMapPin } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import data from "../mock.json";
import Map from '../components/Map/Map'
import barrios from '../barrios.json'
import BtnLogout from "../components/buttonLogout/BtnLogout";
import { contextAuth } from "../context/contextAuth";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";


const Page = () => {
    const { userExist, dataUser } = useContext(contextAuth) || {};
    const [ubicacion, setUbicacion] = useState("");
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([]);
    const [query, setQuery] = useState("cafeteria");

    /* CONTEXT LOGOUT */

    console.log("usuario existe?",userExist, dataUser);

    /* CONTEXT LOGOUT */

    useEffect(() => {
        const filteredSuggestions = data.filter((item) =>
            item.localidad.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 5);
        setSuggestions(filteredSuggestions);
    }, [search]);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esta es la ubicacion', ubicacion);
    };

    const handleSelectChange = (value) => {
        setUbicacion(value.target.value); // Actualiza el estado con el valor seleccionado del Select
    };

    
    console.log(search)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center mb-4">
                <Image src="/logo2.png" width={200} height={200} alt={'Logo'} />
            </div>
            <div className="flex-1 text-center mb-4">
                <h1>Donde busco?</h1>
                <form onSubmit={handleSubmit} className='flex w-full'>
                    <Select
                        label="Barrio"
                        placeholder="Selecciona una opcion"
                        value={ubicacion}
                        onChange={handleSelectChange}
                        style={{ width: '250px', backgroundColor: '#ffba08', color: '#fff' }}
                    >
                        {barrios.map((barrio) => (
                            <SelectItem key={barrio.nombre} value={barrio.nombre} style={{
                                backgroundColor: '#ffba08', color: '#fff', fontWeight: 'bold'
                            }}>
                                {barrio.nombre}
                            </SelectItem>
                        ))}
                    </Select>
                    {/* <Input
                        type="text"
                        variant="bordered"
                        placeholder="Busca locales por zona..."
                        className="max-w-xs"
                        value={search}
                        onChange={handleInputChange}
                    /> */}
                    {/* <Button color="secondary" type="submit" className='mt-2 ml-3'>
                        Buscar
                    </Button> */}
                </form>
                <BtnLogout /> 
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />


                {/* {search.length > 2 && (
                    <div className="suggestions">
                        {suggestions.length > 0 ? (
                            suggestions.map((item, index) => (
                                <div key={index} className="suggestion-item flex items-center py-2">
                                    <FaMapLocationDot size='1.5em' color="#4f4789" className="mr-2 mb-1" />
                                    <div className="flex flex-col">
                                        <div className="flex items-center">
                                            <span className="mr-2">{item.nombre}</span>
                                            <span className="text-gray-500">{item.localidad}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-suggestions text-gray-500">No hay coincidencias</div>
                        )}
                    </div>
                )} */}
            </div>

            {ubicacion && (
                <Map ubicacion={ubicacion} zoom={20} />
            )}
        </div>

    );
};

export default Page;
