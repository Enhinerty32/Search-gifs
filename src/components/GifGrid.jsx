import React, { useEffect, useState } from "react"; 
import { Gifi } from "./Gifi";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category }) { 
  const { imgs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando...</p>}
      <div className="card-grid">
        {imgs.map((obj) => (
          <Gifi key={obj.id} {...obj} />
        ))}
      </div>
    </>
  );
}
