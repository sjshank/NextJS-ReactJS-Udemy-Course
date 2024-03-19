"use client";
import React from "react";
import { notFound } from 'next/navigation'

const RandomNotFound = () => {
  const throwNotFound = () => {
    notFound();
  };
  return <button onClick={throwNotFound}>Not Found</button>;
};

export default RandomNotFound;
