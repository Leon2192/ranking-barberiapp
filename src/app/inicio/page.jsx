'use client'
import React, { useState, useEffect } from "react";
import { AvatarIcon, Button, Flex } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { CiHome } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GrConfigure } from "react-icons/gr";
import { Divider } from "@nextui-org/react";
import { FaMapPin } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import data from "../mock.json";


const Page = () => {
    const [ubicacion, setUbicacion] = useState("");
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const filteredSuggestions = data.filter((item) =>
            item.localidad.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 5);
        setSuggestions(filteredSuggestions);
    }, [search]);


    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    console.log(search)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center mb-4">
                <Image src="/logo.png" width={200} height={200} alt={'Logo'} />
            </div>
            <div className="flex-1 text-center mb-4">
                <Input
                    type="email"
                    variant="bordered"
                    placeholder="Busca locales en..."
                    className="max-w-xs"
                    value={search}
                    onChange={handleInputChange}
                />
                {search.length > 2 && (
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
                )}
            </div>
            <div className="flex justify-center w-full border-t-1 border-solid border-gray-500">
                <div className="flex w-full max-w-screen-lg mt-1">
                    <div className="w-1/4 px-5 menuButton">
                        <CiHome size={'3em'} />
                    </div>
                    <div className="w-1/4 px-5 menuButton">
                        <AiOutlineMenuUnfold size={'3em'} />
                    </div>
                    <div className="w-1/4 px-5 menuButton">
                        <CiBellOn size={'3em'} />
                    </div>
                    <div className="w-1/4 px-5 menuButton'">
                        <GrConfigure size={'3em'} />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Page;
